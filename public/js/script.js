var map = new GMaps({
    div: '.map',
    lat: 50.4273595,
    lng: 30.509313,
    zoom: 17
});


map.addMarker({
lat: 50.4273595,
lng: 30.509313,
title: 'Beauty Lab',
click: function(e) {
        alert('You clicked in this marker');
    }   
});