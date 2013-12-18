function get_normalized_data(data) {
    var baggers = {};
    var cities = {};
    for (var i in data.villes) {
        var city = data.villes[i];
        var newcity = {
            name: city.name,
            ville_img: city.ville_img,
            lat: city.lat,
            lng: city.lng
        };
        cities[city.name] = newcity;
        for (var j in city.baggers) {
            var newbagger = city.baggers[j];
            if (!newbagger.ref_ville) {
                baggers[newbagger.name] = newbagger;
            }
            var bagger = baggers[newbagger.name];
            if (!bagger.cities) {
                bagger.cities = [];
            }
            bagger.cities.push(city.name);
        }
    }
    var baggersList = [];
    for (var i in baggers) baggersList.push(baggers[i]);
    var citiesList = [];
    for (var i in cities) citiesList.push(cities[i]);
    return { 'baggers': baggersList, 'cities': citiesList };
}
console.save(get_normalized_data(data), 'baggers.json');
