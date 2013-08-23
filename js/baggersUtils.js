var map;

function createMapWithVilles() {
    map = new GMaps({
        div: '#map',
        lat: 47.081012,
        lng: 2.352222,
        zoom: 5,
        disableDefaultUI: true
    });

    for (var villeIndex = 0; villeIndex < data['villes'].length; villeIndex++) {
        var ville = data['villes'][villeIndex];
        createAVilleMarkerInTheMap(ville);
    }
}

function createAVilleMarkerInTheMap(ville) {
    var action = function () {
        window.location = window.location.toString().split('#')[0] + "#" + ville['name'];
    };
    map.addMarker({
        lat: ville['lat'],
        lng: ville['lng'],
        title: ville['name'],
        click: action
    });
}

function startGoogleAnalytics() {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-38399904-1']);
    _gaq.push(['_trackPageview']);
    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
}

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
