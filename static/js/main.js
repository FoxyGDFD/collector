let cssFile = document.getElementById('device');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    console.log('еп');
}
else {
    console.log('вруби с мобилы');
}