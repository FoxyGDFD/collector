

var userCoordA = 55.708825;
var userCoordB = 37.651484;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}


function showPosition(position) {
  var manA = position.coords.latitude;
  var manB = position.coords.longitude;
  compareA = Math.abs(manA - userCoordA);
  compareB = Math.abs(manB - userCoordB);
  if (compareA <= 0.00025 & compareB <= 0.0017) {
    console.log('U NEAR!!!')
  }
  console.log(manA, manB)
}



setInterval(getLocation, 2000);