$(document).ready(function(){

  $('#map-btn, #map-btn-side').click(function(e){
    e.preventDefault();
    $('.coffee-app').toggleClass('map-open');
  });

  (function map(){
    var zoom = 15;

    var map = L.map('map', {
      center: new L.LatLng(35.467560, -97.516428),
      zoom: zoom,
      minZoom: zoom - 4,
      maxZoom: zoom + 2
    });

    var layer = new L.StamenTileLayer("toner");
    map.addLayer(layer);

    d3.csv('yelp.csv', function(data){

      data.forEach(function(d){

        var circle = L.marker( [ d['location-lat'], d['location-long'] ] ).bindPopup(d['name']).addTo(map);

      })

    })
  })()

})
