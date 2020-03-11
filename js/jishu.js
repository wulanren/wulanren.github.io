var b = document.getElementById('yms');
var a = document.getElementById('dmh');
var c = document.getElementById('tianshu');
/**
 * 数字滚动
 * @param {Object} num         开始值
 * @param {Object} maxNum    最大值,最终展示的值
 */
function zong() {
    function numRunFun1(num1, maxNum1) {
        var numText1 = num1;
        var golb1; // 为了清除requestAnimationFrame
        function numSlideFun1() {
            numText1 += 0.04; // 速度的计算可以为小数
            if (numText1 >= maxNum1) {
                numText1 = maxNum1;
                cancelAnimationFrame(golb1);
            } else {
                golb1 = requestAnimationFrame(numSlideFun1);
            }
            b.innerHTML = ~~(numText1)

        }
        numSlideFun1();
    }
    // 运行
    numRunFun1(0, 8)

    function numRunFun2(num2, maxNum2) {
        var numText2 = num2;
        var golb2; // 为了清除requestAnimationFrame
        function numSlideFun() {
            numText2 += 50; // 速度的计算可以为小数
            if (numText2 >= maxNum2) {
                numText2 = maxNum2;
                cancelAnimationFrame(golb2);
            } else {
                golb2 = requestAnimationFrame(numSlideFun);
            }
            a.innerHTML = ~~(numText2)
            c
        }
        numSlideFun();
    }
    // 运行
    numRunFun2(0, 11886)

    function numRunFun3(num3, maxNum3) {
        var numText3 = num3;
        var golb3; // 为了清除requestAnimationFrame
        function numSlideFun() {
            numText3 += 0.1; // 速度的计算可以为小数
            if (numText3 >= maxNum3) {
                numText3 = maxNum3;
                cancelAnimationFrame(golb3);
            } else {
                golb3 = requestAnimationFrame(numSlideFun);
            }
            c.innerHTML = ~~(numText3)

        }
        numSlideFun();
    }
    // 运行
    numRunFun3(0, 22)
}