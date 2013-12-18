test('there are cities', function() {
    ok(data.cities.length);
});

test('there are baggers', function() {
    ok(data.baggers.length);
});

test('baggers have at least one city', function() {
    _.each(data.baggers, function(bagger) {
        ok(bagger.cities.length);
    });
});

test('city references exist', function() {
    var citynames = _.map(data.cities, 'name');
    _.each(data.baggers, function(bagger) {
        _.each(bagger.cities, function(cityname) {
            ok(_.contains(citynames, cityname));
        });
    });
});

function assertUnique(arr) {
    ok(arr.length == _.uniq(arr).length);
}

test('cities have unique names', function() {
    assertUnique(_.map(data.cities, 'name'));
});

test('baggers have unique names', function() {
    assertUnique(_.map(data.baggers, 'name'));
});

test('there are cities in data.villes', function() {
    var baggers_data = get_baggers_data(data);
    ok(baggers_data.villes.length);
});

test('there are baggers in each data.villes.baggers', function() {
    var baggers_data = get_baggers_data(data);
    var cities = baggers_data.villes;
    _.each(baggers_data.villes, function(city) {
        ok(city.baggers.length, 'there are baggers in ' + city.name);
    });
});
