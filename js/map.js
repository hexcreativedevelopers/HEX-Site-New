mapboxgl.accessToken = 'pk.eyJ1IjoiYmxpbmR2b2lkIiwiYSI6ImNqanM1MnA5MDI5NDYza3JzdmpkYXVhNzYifQ.izoV5MkYIGEtG1WSujkABA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/blindvoid/ckk828mvb0ylg17qu5ndmfjvx',
    center: [96.122798, 16.817334],
    zoom: 18.79,
    bearing:131.79,
    pitch: 44.92
});
map.dragRotate.disable();
map.touchZoomRotate.disableRotation();
map.scrollZoom.disable();
map.dragPan.disable();
map.doubleClickZoom.disable();
// var marker = new mapboxgl.Marker()
//     .setLngLat([96.1225788,16.817326])
//     .addTo(map);
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [96.123124,16.817210]
        },
        properties: {
            title: 'HEX Creative',
            description: 'Yangon,Myanmar'
        }
    }]
   
};

// add markers to map
geojson.features.forEach(function (marker) {

    // create a HTML element for each feature
    var el = document.createElement('a');
    el.setAttribute('href',"https://www.google.com/maps/place/HEX+Creative/@16.8173637,96.1225729,19z/data=!3m1!4b1!4m5!3m4!1s0x30c1eb140b9e2c5d:0x61cefaa61a73e2b6!8m2!3d16.8173637!4d96.1231201" );
    el.setAttribute('target',"_blank");
    el.className = 'marker';    
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});