var map;

function createMapWithVilles(data) {
    map = new GMaps({
        div: '#map',
        lat: 47.081012,
        lng: 2.352222,
        zoom: 5,
        disableDefaultUI: true
    });

    for (var villeIndex = 0; villeIndex < data.villes.length; villeIndex++) {
        var ville = data.villes[villeIndex];
        createAVilleMarkerInTheMap(ville);
    }
}

function createAVilleMarkerInTheMap(ville) {
    var action = function () {
        window.location = window.location.toString().split('#')[0] + "#" + ville.name;
    };
    map.addMarker({
        lat: ville.lat,
        lng: ville.lng,
        title: ville.name,
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
        ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
}

function shuffleAndAlternateBaggers(villesAndBaggers){
     _(villesAndBaggers.villes).map(function(ville){
         ville.baggers = _.shuffle(ville.baggers);

         for (var baggerIndex = 0; baggerIndex < ville.baggers.length; baggerIndex++) {
             var bagger = ville.baggers[baggerIndex];
             bagger.paire = (baggerIndex % 2 === 1);
             // On n'utilise plus encodeURIComponent, car cela pose un souci avec le dropdown + Mustache (les liens ne marchent plus)
             bagger.baggerId = bagger.name.replace(/ /g, '_');
         }
     });
}

function hideOrDisplayBaggers() {
    $('.ville-img').click(function (e) {
        e.preventDefault();
        $(this).closest('.ville').find('.baggers').fadeToggle();
    });
}

function displayContactModalWindowMail() {
    $('.invite-me').click(function (e) {
        e.preventDefault();
        $('#mail-result').fadeOut();

        $('#contactModal').foundation('reveal', 'open');

        var baggerName = $(this).parent().find('.contact-me').text();
        var bagger = _.find(_.flatten(data.villes, 'baggers'), {'name': baggerName});

        $('#contactModal').find('#contact-to').val(bagger.mail);

        $('#contact-send').click(function(e) {
            e.preventDefault();

            $.ajax({ url: "http://bbl-backend.eu01.aws.af.cm/mail",
                data:{ from: $('#contact-from').val(), to: $('#contact-to').val(), subject: $('#contact-subject').val(), message: $('#contact-message').val()},
                type: 'POST',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function(data) {
                    $('#mail-result').fadeIn();
                    $('#mail-status').removeClass("alert").addClass("success").text("Message envoyé ");
                },
                error: function(xhr, status, errorThrown) {
                    $('#mail-result').fadeIn();
                    $('#mail-status').removeClass("success").addClass("alert").text(xhr.responseText );
                }
            });
        });
    });
}