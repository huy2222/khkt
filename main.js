var CheckChay = document.querySelector('.check');
var BtncloseNCT = document.querySelector('.btn-closeNCT');
var NCT = document.querySelector('.notification');
var Sound = document.getElementById('Soundbaodong');
function OpenNCT() {
    NCT.style.display="block";
    Sound.play();
}
CheckChay.addEventListener('click',OpenNCT)
function CloseNCT() {
    NCT.style.display="none";
    Sound.pause();

}
BtncloseNCT.addEventListener('click',CloseNCT)