var map;
$(document).ready(function () {
    map = new GMaps({
        div: '#map',
        lat: 47.081012,
        lng: 2.352222,
        zoom: 5,
        disableDefaultUI: true
    });

    for (var villeIndex = 0; villeIndex < data['villes'].length; villeIndex++) {
        var ville = data['villes'][villeIndex];
        createVilleMarker(ville);
    }

    function createVilleMarker(ville) {
        var action = function (e) {
            window.location = window.location.toString().split('#')[0] + "#" + ville['name'];
        };
        map.addMarker({
            lat: ville['lat'],
            lng: ville['lng'],
            title: ville['name'],
            click: action
        });
    }
});

function addPaireImpaire(){
     for (var villeIndex = 0; villeIndex < data['villes'].length; villeIndex++) {
        var baggers = data['villes'][villeIndex]['baggers'];
        if (baggers !== undefined) {
            for (var baggerIndex = 0; baggerIndex < baggers.length; baggerIndex++) {
                var bagger = baggers[baggerIndex];
                bagger['paire'] = (baggerIndex % 2 == 1);
                // On n'utilise plus encodeURIComponent, car cela pose un souci avec le dropdown + Mustache (les liens ne marchent plus)
                bagger['baggerId'] = bagger.name.replace(/ /g, '_');
            }
        }
    }
}
