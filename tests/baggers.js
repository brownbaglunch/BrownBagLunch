test('there are cities in data.villes', function() {
  ok(data.villes.length);
});

test('there are baggers in each data.villes.baggers', function() {
  var cities = data.villes;
  for (var i in cities) {
    var city = cities[i];
    ok(city.baggers.length);
  }
});

test('if there is a ref_ville, it is valid', function() {
  var matches = filter_baggers(function(bagger) {
    return bagger.ref_ville;
  });
  if (matches.length) {
    for (var i in matches) {
      var bagger = matches[i];
      var name = bagger.ref_ville;
      ok(get_city_by_name(data, name), 'ref_ville ' + name + ' is valid');
    }
  } else {
    ok('no baggers with ref_ville');
  }
});

test('invalid ref_ville should fail', function() {
  ok(!get_city_by_name(data, 'invalid'), 'no city named "invalid"');
});

test('attributes correctly copied from ref_ville', function() {
  var data = { villes: [
    { name: "Paris", baggers: [ { name: "Jack", contact: "somewhere" } ] },
    { name: "Tokyo", baggers: [ { name: "Jack", ref_ville: "Paris" } ] }
  ] };
  ok(get_city_by_name(data, "Paris"));
  ok(get_city_by_name(data, "Tokyo"));
  var jack_in_tokyo = data.villes[1].baggers[0];
  ok(!jack_in_tokyo.contact, 'Jack has no .contact field in original data');
  denormalize_data(data);
  ok(jack_in_tokyo.contact, 'Jack has .contact field in denormalized data');
});

function get_any_dup(data) {
  var unique_users = [];
  return walk_baggers_until(data, function(bagger) {
    var key = bagger.name + bagger.contact;
    if (unique_users.indexOf(key) == -1) {
      unique_users.push(key);
    } else {
      return bagger;
    }
  });
}

test('no dups in original data', function() {
  var bagger = get_any_dup(data);
  ok(!bagger, 'no dups');
});

test('dups in denormalized data', function() {
  var data = { villes: [
    { name: "Paris", baggers: [ { name: "Jack", contact: "somewhere" } ] },
    { name: "Tokyo", baggers: [ { name: "Jack", ref_ville: "Paris" } ] }
  ] };
  denormalize_data(data);
  var bagger = get_any_dup(data);
  ok(bagger, bagger.name + ' has a dup');
});
