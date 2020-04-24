function ercishuaxin() {
    function imgonload() {
        let img = document.querySelectorAll("img");
        console.log(img);
        for (let i = 0; i < img.length; i++) {
            if (img[i].getBoundingClientRect().top < window.innerHeight) {

                //图片一旦有src就会加载出来，所以图片的路径不会放在src中，而是一个自定义的属性data-src中
                img[i].src = img[i].dataset.src;

            }
        }
    }

    function scollImg(fn) {
        let timer = null;
        let context = this;
        return function() {
            clearTimeout(timer);
            timer = setTimeout(() => {

                fn.apply(context);
            }, 10)
        }
    }
    window.onload = imgonload;
    window.onscroll = scollImg(imgonload);
}
ercishuaxin();