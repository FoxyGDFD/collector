const editBtn = document.getElementById('edit-btn');
const beginBtn = document.getElementById('begin-btn');

editBtn.onclick = function() {
    let editPopUp = document.getElementById('pop-up-edit-profile');
    if(editPopUp.className === 'pop-up-edit-profile-disabled') {
        editPopUp.className = 'pop-up-edit-profile-enabled';
    }
}

beginBtn.onclick = function() {
    const beginPopUp = document.getElementById('pop-up-begin');
    const endPopUp = document.getElementById('pop-up-end');

    if (endPopUp.className === 'pop-up-end-disabled') {
        endPopUp.className = 'pop-up-end-enabled';
    }

    if(beginPopUp.className === 'pop-up-begin-disabled') {
        beginPopUp.className = 'pop-up-begin-disabled';
    }
}