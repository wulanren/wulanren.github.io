$(document).ready(
    function() {
        $(window).scroll(function() {
            var top = $(document).scrollTop(); //获取滚动条的位置
            var cxzldhl = $('#cxzldhl');
            var items = $('#cxzlbody').find('.kuai1');

            var contentId = "";
            items.each(function() {
                var m = $(this);
                var itemTop = m.offset().top;
                //offset()获取节点的偏移
                if (top > itemTop - 100) {
                    contentId = "#" + m.attr("id");
                } else {
                    return;
                }
                console.log(itemTop);
            });
            var contentLink = cxzldhl.find(".gaoliang1");
            if (contentId && contentLink.attr('href') != contentId) {
                contentLink.removeClass('gaoliang1');
                cxzldhl.find('[href=' + contentId + ']').addClass("gaoliang1");
            }

        });
    }
);