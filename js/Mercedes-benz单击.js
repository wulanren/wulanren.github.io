var search = document.getElementById("search");
var cx = document.getElementById("dhlcx");
var zn = document.getElementById("gczn");
var fw = document.getElementById("khfw");
search.style.display = "none";
cx.style.display = "none";
zn.style.display = "none";
fw.style.display = "none";

function sousuo() {
    if (search.style.display == "block")
        search.style.display = "none";
    else
        search.style.display = "block";
    cx.style.display = "none";
    zn.style.display = "none";
    fw.style.display = "none";
}


function dhlcx1() {
    if (cx.style.display == "block")
        cx.style.display = "none";
    else
        cx.style.display = "block";
    search.style.display = "none";
    zn.style.display = "none";
    fw.style.display = "none";
}

function gczn1() {
    if (zn.style.display == "block")
        zn.style.display = "none";
    else
        zn.style.display = "block";
    search.style.display = "none";
    cx.style.display = "none";
    fw.style.display = "none";
}

function khfw1() {
    if (fw.style.display == "block")
        fw.style.display = "none";
    else
        fw.style.display = "block";
    search.style.display = "none";
    cx.style.display = "none";
    zn.style.display = "none";
}