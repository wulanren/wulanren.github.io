var ydddenglus = document.getElementById("ydddenglu");
var dengluButtons = document.getElementById("dengluButton");
var yddzhuces = document.getElementById("yddzhuce");

// ydddenglus.style.display = "none";
// dengluButtons.style.display = "none";
yddzhuces.style.display = "none";

// 显示注册
function xszc() {
    if (yddzhuces.style.display == "none") {
        yddzhuces.style.display = "block";
        ydddenglus.style.display = "none";
        dengluButtons.style.display = "none";
    } else {
        ydddenglus.style.display = "none";
        dengluButtons.style.display = "none";
        yddzhuces.style.display = "block";
    }

}
// 显示登陆按钮
// function xsButton() {
//     if (bngczns.style.display == "block")
//         bngczns.style.display = "none";
//     else
//         bngczns.style.display = "block";
// }

// 显示登陆
function xsdl() {
    if (ydddenglus.style.display == "none") {
        dengluButtons.style.display = "block";
        ydddenglus.style.display = "block"
        yddzhuces.style.display = "none";
    } else {
        dengluButtons.style.display = "none";
        ydddenglus.style.display = "none"
        yddzhuces.style.display = "block";
    }

}