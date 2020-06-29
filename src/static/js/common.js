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

    if(window.innerWidth >= 1100) {
        $('.tab a').click(function (e) {
            e.preventDefault();
            $('a').removeClass('active');
            $(this).addClass('active');
            var tab = $(this).attr('href');
            $('.tab__box').not(tab).css({'display': 'none'});
            $(tab).fadeIn(400);
        });
        $('.tab a:first').click();
    }

    $( window ).resize(function() {
        if(window.innerWidth >= 1100) {
            $('.tab a').click(function (e) {
                e.preventDefault();
                $('a').removeClass('active');
                $(this).addClass('active');
                var tab = $(this).attr('href');
                $('.tab__box').not(tab).css({'display': 'none'});
                $(tab).fadeIn(400);
            });
            $('.tab a:first').click();
        } else {
            $('#tab1').removeAttr('style');
            $('#tab2').removeAttr('style');
        }
    });
});

var swiper = new Swiper('.documents__slider', {
    loop: true,
    spaceBetween: 60,
    slidesPerView: 5,
    navigation: {
        nextEl: '.documents-block .swiper-button-next',
        prevEl: '.documents-block .swiper-button-prev',
    },
    pagination: {
        el: '.documents-block .swiper-pagination',
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

var swiper2 = new Swiper('.certificates__slider', {
    loop: true,
    spaceBetween: 80,
    slidesPerView: 4,
    navigation: {
        nextEl: '.certificates-block .swiper-button-next',
        prevEl: '.certificates-block .swiper-button-prev',
    },
    pagination: {
        el: '.certificates-block .swiper-pagination',
    },
    breakpoints: {
        499: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        767: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        1099: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        1599: {
            slidesPerView: 3.5,
            spaceBetween: 16,
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
