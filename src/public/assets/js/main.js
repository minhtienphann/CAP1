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
//document.addEventListener('DOMContentLoaded', function(){
var modal = document.getElementById('myModal');
var contentModalGive = document.getElementById('contentModal-give');
var contentModalTake = document.getElementById('contentModal-take');
var btn1 = document.getElementById("btn-give");
var btn2 = document.getElementById("btn-take");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
modal.style.display = "block";
contentModalGive.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
contentModalGive.style.display = "none";
contentModalTake.style.display = "none";
}
btn2.onclick = function() {
modal.style.display = "block";
contentModalTake.style.display = "block";
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
contentModalTake.style.display = "none";
contentModalGive.style.display = "none";
}
}
//})