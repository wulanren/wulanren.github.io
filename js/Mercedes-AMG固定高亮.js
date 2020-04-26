$(document).ready(
    function() {
        $(window).scroll(function() {
            var top = $(document).scrollTop(); //获取滚动条的位置
            var AMGejdh = $('#AMGejdh');
            var items = $('#AMGcontent').find('.kuai');
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
            });
            var contentLink = AMGejdh.find(".gaoliang");
            if (contentId && contentLink.attr('href') != contentId) {
                contentLink.removeClass('gaoliang');
                AMGejdh.find('[href=' + contentId + ']').addClass("gaoliang");
            }

        });
    }
);