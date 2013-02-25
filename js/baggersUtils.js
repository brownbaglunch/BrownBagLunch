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
        var baggers = ville['baggers'];
        if (baggers !== undefined) {
            for (baggerIndex=0; baggerIndex < baggers.length; baggerIndex++) {
                baggers[baggerIndex]['paire'] = (baggerIndex % 2 == 1);
            }
        }
    }

    function createVilleMarker(ville) {
        var action = function (e) {
            window.location = window.location + "#" + ville['name'];
        };
        map.addMarker({
            lat: ville['lat'],
            lng: ville['lng'],
            title: ville['name'],
            click: action
        });
    }

});
