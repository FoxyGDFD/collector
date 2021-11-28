/*let cssFile = document.getElementById('device');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    console.log('еп');
}
else {
    console.log('вруби с мобилы');
}*/


const editBtn = document.getElementById('edit-btn');

editBtn.onclick = function() {
    const edit = document.getElementById('pop-up-edit-profile');
    edit.className = 'pop-up-edit-enabled';
}