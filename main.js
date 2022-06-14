
function _toggleSecEl(sec){
    sec.querySelector('.sec-content').classList.toggle('hide');
    sec.querySelector('.sec-toggle').classList.toggle('collapse');
}

function toggleSec(target){
    _toggleSecEl(target.closest('section'));
}


function toggleAllSec(){
    document.querySelectorAll('section').forEach(sec =>{
        _toggleSecEl(sec);
    })
}