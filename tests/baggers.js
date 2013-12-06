test('there are cities in data.villes', function() {
  ok(data.villes.length > 0);
});

test('there are baggers in each data.villes.baggers', function() {
  var cities = data.villes;
  for (var i in cities) {
    var city = cities[i];
    ok(city.baggers.length > 0);
  }
});

test('if there is a ref_ville, it is valid', function() {
  var bagger = walk_baggers_until(function(bagger) {
    return bagger.ref_ville;
  });
  if (bagger) {
    ok(function() {
      var cities = data.villes;
      for (var i in cities) {
        var city = cities[i];
        if (city.name == bagger.ref_ville) return 1;
      }
    }(), 'ref_ville ' + bagger.ref_ville + ' is valid');
  } else {
    ok('no baggers with ref_ville');
  }
});
