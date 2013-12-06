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
