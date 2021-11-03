var map;
var lati = 0;
var longi = 0;

function initMap() {
  window.navigator.geolocation.getCurrentPosition(function(pos) {
    lati = parseFloat(pos.coords.latitude);
    longi = parseFloat(pos.coords.longitude);
    map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: lati,
        lng: longi
            },
      zoom: 15,
    });
  

    var centerPoint = new google.maps.Marker({
      position:{
        lat: lati,
        lng: longi,
      },
      map: map
    });
  });
  
}

