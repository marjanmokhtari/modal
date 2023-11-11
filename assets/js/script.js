
let _bg=document.getElementById('_bg')
let mymodal = document.querySelector('.modal-hide')
function popup() {
    mymodal.classList.add('modal')
    _bg.classList.add('container')

}
function btnclick() {
    mymodal.classList.remove('modal')
    _bg.classList.remove('container')

}
