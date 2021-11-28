//получение геолокации
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }

//
function showPosition(position) {
  var a = position.coords.latitude;
  var b = position.coords.longitude;
   ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map('map', {
            zoom: 17,
            center: [a, b],
            controls: ['geolocationControl','zoomControl']
            });
        }
}

