window.onload = function() {
    var ejdhs = document.getElementById('ejdh');
    // 二级导航栏距顶部距离
    var jlTop = ejdhs.offsetTop;
    window.onscroll = function() {
        // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
        var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollT >= jlTop) {
            if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
                // 兼容IE6代码
                ejdhs.style.position = 'absolute';
                ejdhs.style.top = scrollT + 'px';
                ejdhs.style.left = 0 + 'px';
            } else {
                // 正常浏览器代码
                ejdhs.style.position = 'fixed';
                ejdhs.style.top = 0;
                ejdhs.style.left = 0;
            }
        } else
            ejdhs.style.position = '';
    }
}