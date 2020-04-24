var agent = navigator.userAgent;
var header = document.getElementById('AMGnavBar')
if (/.*Firefox.*/.test(agent)) {
    document.addEventListener("DOMMouseScroll", function(e) {
        e = e || window.event;
        var detail = e.detail;
        if (detail > 0) {
            AMGnavBar.style.display = 'block';
        } else {
            AMGnavBar.style.display = 'none';
        }
    });
} else {
    document.onmousewheel = function(e) {
        e = e || window.event;
        var wheelDelta = e.wheelDelta;
        if (wheelDelta > 0) {
            AMGnavBar.style.top = '0px';
            // header.style.display = 'block';
            AMGnavBar.style.opacity = '1';
        } else {
            AMGnavBar.style.top = '-14vh';
            AMGnavBar.style.opacity = '0.8';
            // header.style.display = 'none';
        }
    }
}