;
$(function() {
    var li = $('.nav').children('ul').children('li').children('a'),
        Dul = $('.nav').children('ul').children('li').children('ul');
    // click function effect
    function showUl(i) {
        var onclick = function() {
            var ul = $(this).next('ul');
            if (ul.css('display') == 'none') {
                Dul.hide(500);
                li.css({
                    'background':'none',
                    'color':'#ffffff',
                    'fontWeight':'normal'
                });
                ul.show(500);
                $(this).css({
                    'background':'#ffffff',
                    'color':'#000000',
                    'fontWeight':'bold'
                })
            }
        }
        return onclick;
    }
    for (var i = 0; i < li.length; i++) {
        li[i].onclick = showUl(i);
    }
})
