var search = document.getElementById("search");
var cx = document.getElementById("dhlcx");
var zn = document.getElementById("gczn");
var fw = document.getElementById("khfw");
var bncxs = document.getElementById('bncx');
var bngczns = document.getElementById('bngczn');
var bnkhfws = document.getElementById('bnkhfw');
var bnbctxs = document.getElementById('bnbctx');
search.style.display = "none";
cx.style.display = "none";
zn.style.display = "none";
fw.style.display = "none";
bncxs.style.display = 'none';
bngczns.style.display = 'none';
bnkhfws.style.display = 'none';
bnbctxs.style.display = 'none';

function bncxss() {
    if (bncxs.style.display == "block")
        bncxs.style.display = "none";
    else
        bncxs.style.display = "block";
}

function bngcznss() {
    if (bngczns.style.display == "block")
        bngczns.style.display = "none";
    else
        bngczns.style.display = "block";
}

function bnkhfwss() {
    if (bnkhfws.style.display == "block")
        bnkhfws.style.display = "none";
    else
        bnkhfws.style.display = "block";
}

function bnbctxss() {
    if (bnbctxs.style.display == "block")
        bnbctxs.style.display = "none";
    else
        bnbctxs.style.display = "block";
}

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