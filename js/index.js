// 导航实例
const headerEl = document.querySelector("header");
// 返回顶部实例
const scrollToTop = document.querySelector(".scrollToTop");

// 初始轮播
const glide = new Glide(".glide");
// 获取轮播标题实例
const captionsEl = document.querySelectorAll(".slide-caption");
// 当轮播加载完成后，每个轮播完成时，加载标题动画
glide.on(["mount.after", "run.after"], () => {
    // 获取当前展示的轮播index
    const caption = captionsEl[glide.index];
    anime({
        // 对每个子元素进行动画
        targets: caption.children,
        // 透明度
        opacity: [0, 1],
        // 持续时间
        duration: 400,
        easing: "linear",
        // 每个子元素相继延迟400毫秒，第一个延迟300毫秒
        delay: anime.stagger(400, { start: 300 }),
        // 从下向上移动，每行从40到10递减，最后移动到0
        translateY: [anime.stagger([40, 10]), 0]
    });
});

// 轮播进行前，把标题透明度设置为0，还原
glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    });
});
glide.mount();
const burgerEl = document.querySelector(".burger");
const nav = document.querySelector("header nav");
burgerEl.addEventListener("click", () => {
    headerEl.classList.toggle("dhl");
});
// 探索更多按钮的处理函数
const exploreBtnEl = document.querySelector(".explore-btn");
exploreBtnEl.addEventListener("click", () => {
    scroll.animateScroll(document.querySelector("#gybz"));
});

// 折叠菜单打开时，如果点击了链接，则自动关闭全屏导航
document.addEventListener("scrollStart", () => {
    if (headerEl.classList.contains("dhl")) {
        headerEl.classList.remove("dhl");
    }
});