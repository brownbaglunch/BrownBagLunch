test('there are cities', function() {
    ok(data.cities);
});

test('there are baggers', function() {
    ok(data.speakers.length);
});

test('baggers have at least one city', function() {
    _.each(data.speakers, function(speaker) {
        ok(speaker.cities.length);
    });
});

test('city references exist', function() {
    var citynames = _.map(data.cities, 'name');
    _.each(data.speakers, function(speaker) {
        _.each(speaker.cities, function(cityname) {
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
    var villesAndBaggers = getVillesAndBaggers(data);
    ok(villesAndBaggers.villes.length);
});

test('there are baggers in each data.villes.baggers', function() {
    var villesAndBaggers = getVillesAndBaggers(data);
    var cities = villesAndBaggers.villes;
    _.each(villesAndBaggers.villes, function(city) {
        ok(city.baggers.length, 'there are baggers in ' + city.name);
    });
});
