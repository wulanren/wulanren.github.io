var box = document.querySelectorAll('.fenye');
var bg = document.querySelector('.quanping');
var num = 0;
for (var x = 0; x < box.length; x++) //使每个块的宽和高都是当前浏览器可视区的宽和高
{
    box[x].style.width = innerWidth + 'px';
    box[x].style.height = innerHeight + 'px';
}
bg.style.width = 6 * innerWidth + 'px'; //此步骤必须存在，因为是所有的块整体移动
bg.style.height = 6 * innerHeight + 'px';
document.addEventListener('mousewheel', function(e) //鼠标滚轮事件
        {
            if (getDetail(e) < 0) //判断滚轮滚动方向
            {
                if (num < 5) {
                    num++;
                }
            } else {
                if (num > 0) {
                    num--;
                }
            }
            bg.style.marginTop = -innerHeight * num + 'px';
            for (var y = 0; y < p.length; y++) {
                p[y].className = '';
            }
            p[num].className = 'cur';
        })
    // 统一火狐和非火狐的滚动距离
function getDetail(e) {
    if (e.wheelDelta) //非火狐适用
    {
        return e.wheelDelta;
    } else if (e.detail) //火狐适用
    {
        return e.detail * -40;
    }
}