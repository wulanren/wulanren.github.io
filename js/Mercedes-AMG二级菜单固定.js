window.onload = function() {
    // alert("你好，我是一个警告框！");
    var AMGejdhs = document.getElementById('AMGejdh');
    // 二级导航栏距顶部距离
    var jlTop = AMGejdhs.offsetTop;
    window.onscroll = function() {
        // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
        var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollT >= jlTop) {
            if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
                // 兼容IE6代码
                AMGejdhs.style.position = 'absolute';
                AMGejdhs.style.top = scrollT + 'px';
                AMGejdhs.style.left = 0 + 'px';
            } else {
                // 正常浏览器代码
                AMGejdhs.style.position = 'fixed';
                AMGejdhs.style.top = 0;
                AMGejdhs.style.left = 0;
            }
        } else
            AMGejdhs.style.position = '';
    }
}