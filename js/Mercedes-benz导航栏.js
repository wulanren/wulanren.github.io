var agent = navigator.userAgent;
var header = document.getElementById('navBar')
if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {
            navBar.style.display = 'block';
        } else {
            navBar.style.display = 'none';
        }
    });
} else {
    document.onmousewheel = function(e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {
            navBar.style.top = '0px';
            navBar.style.opacity = '1';
        } else {
            navBar.style.top = '-14vh';
            navBar.style.opacity = '0.8';
        }
    }
}