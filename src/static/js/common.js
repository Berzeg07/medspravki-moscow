$(document).ready(function(){
    $('.burger').on('click', function() {
        $('.sub-menu-inner').slideToggle();
        if($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).css('background-image', 'url(img/close.png)');
        }
    });

    $( window ).resize(function() {
        if(window.innerWidth >= 1280) {
            if($('.sub-menu-inner').attr('style')) {
                $('.sub-menu-inner').removeAttr('style');
                $('.burger').removeAttr('style');
            }
        }
    });
});
