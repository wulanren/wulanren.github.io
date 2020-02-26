$(document).ready(
            function() {
                $(window).scroll(function() {
                    var top = $(document).scrollTop(); //获取滚动条的位置
                    var ejdh = $('#ejdh');
                    var items = $('#bxdjBody').find('.nrBody');

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
                    var contentLink = ejdh.find(".current");
                    if (contentId && contentLink.attr('href') != contentId) {
                        contentLink.removeClass('current');
                        ejdh.find('[href=' + contentId + ']').addClass("current");
                    }

                });
            }
        );