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
        if(window.innerWidth >= 1100) {
            if($('.sub-menu-inner').attr('style')) {
                $('.sub-menu-inner').removeAttr('style');
                $('.burger').removeAttr('style');
            }
        }
    });
});

var swiper = new Swiper('.documents__slider', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        599: {
            slidesPerView: 1.3,
            spaceBetween: 42,
        },
        767: {
            slidesPerView: 2.3,
            spaceBetween: 42,
        },
        991: {
            slidesPerView: 2.3,
            spaceBetween: 42,
        },
        1100: {
            slidesPerView: 3.3,
            spaceBetween: 42,
        },
        1599: {
            slidesPerView: 4.3,
            spaceBetween: 42,
        }
    }
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        controls: ['zoomControl', 'geolocationControl'],
        zoom: 11
    });

    myMap.behaviors.disable('scrollZoom');
}
