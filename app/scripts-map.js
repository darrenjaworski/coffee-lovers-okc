$(document).ready(function(){

  $('#map-btn, #map-btn-side').click(function(e){
    e.preventDefault();
    $('.coffee-app').toggleClass('map-open');
  });

  (function map(){
    var zoom = 17;

    var map = L.map('map', {
      center: new L.LatLng(35.475857, -97.519417),
      zoom: zoom,
      minZoom: zoom - 4,
      maxZoom: zoom + 2
    });

    var layer = new L.StamenTileLayer("toner");
    map.addLayer(layer);

    d3.csv('yelp.csv', function(data){

      data.forEach(function(d, i){

        if (i == 0) {
          var circle = L.marker( [ d['location-lat'], d['location-long'] ] ).addTo(map);
          circle.bindPopup(d['name']).openPopup();
          return;
        }

        var circle = L.marker( [ d['location-lat'], d['location-long'] ] ).bindPopup(d['name']).addTo(map);

      })

    })
  })()

})
