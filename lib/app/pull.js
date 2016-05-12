define(['jquery','iscroll'], function($,iscroll) {
    $("#wrapper").css({
        height: $(window).height() + "px"
    });
    var myScroll;
    var isMoved = false;
    var isMore = true;

    function loaded() {
        myScroll = new IScroll('#wrapper', {
            probeType: 1,
            tap: true,
            click: false,
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            interactiveScrollbars: false,
            keyBindings: false,
            deceleration: 0.0002,
            startY: 0
        });
        //滑动
        myScroll.on('scrollEnd', function() {
            console.log("Y:" + this.y + "H:" + this.wrapperHeight + "HY" + this.maxScrollY);
            if (this.y <= (this.maxScrollY + 200)) {
                var len = jQuery("#scroller ul li").length;
                if (isMore) {
                    $(".pullUp").show().text("正在加载数据");
                    //加载数据
                    $.get("data.php", function(data) {
                        if (data.total > len) {
                            $('#wrapper > #scroller > ul').append('<li>马拉松' + len + '</li>');
                            isMore = true;
                        } else {
                            isMore = false;
                        }
                    }, "json");
                } else {
                    $(".pullUp").show().text("没有更多数据了");
                }
                setTimeout(function() {
                    myScroll.refresh();
                }, 800);
            }
        });
        setTimeout(function() {
            myScroll.refresh();
        }, 800);
    }

    document.addEventListener('onload', loaded(), false);
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
})
