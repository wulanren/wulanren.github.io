window.onload = function() {
    var AMGejdh = document.getElementById('AMGejdh');
    // 二级导航栏距顶部距离
    var jlTop = AMGejdh.offsetTop;
    //console.log(divT);
    window.onscroll = function() {
        // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
        var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollT >= jlTop) {
            if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
                // 兼容IE6代码
                AMGejdh.style.position = 'absolute';
                AMGejdh.style.top = scrollT + 'px';
                AMGejdh.style.left = 0 + 'px';
            } else {
                // 正常浏览器代码
                AMGejdh.style.position = 'fixed';
                AMGejdh.style.top = 0;
                AMGejdh.style.left = 0;
            }
        } else
            AMGejdh.style.position = '';
    }
}