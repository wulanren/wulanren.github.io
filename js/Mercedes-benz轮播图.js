var items = document.getElementsByClassName('item'); //图片
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var points = document.getElementsByClassName('point'); //点
var index = 0; //index表示第几张图片在展示  ---》第index张图片有active这个类名
var time = 0; //定时器跳转参数
//第几个点在展示
var clearActive = function() {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < items.length; i++) {
        points[i].className = 'point'
    }
}
var goIndex = function() {
    clearActive();
    console.log(index)
    points[index].className = 'point active'
    items[index].className = 'item active';
}
var goNext = function() {
    if (index < 6) {
        index++;

    } else {
        index = 0;
    }

    goIndex();

}
var goPre = function() {
    if (index == 0) {
        index = 6;
    } else {
        index--;
    }
    goIndex();
}
goNextBtn.addEventListener('click', function() {
    goNext();
})
goPreBtn.addEventListener('click', function() {
    goPre();
})

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;

        goIndex();
        time = 0;
    })
}
//2000ms   跳转一次
setInterval(function() {
    time++;
    if (time == 40) {
        goNext();
        time = 0;
    }
}, 100)