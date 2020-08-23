$(document).ready(function () {
    $('.universities__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        // adaptiveHeight: true,
        dots: true,
        appendDots: $('.js-slider-line-universities'),
        // autoplay: true,
        // autoplaySpeed: 5000,


        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

var filtered = false;

$('.js-ua-universes').on('click', function () {
    filterSlider()
    $('.universities__slider').slick('slickFilter', '.js-ua-universe');
    $('.js-ua-universes').addClass('btn--university-active');
});

$('.js-rus-universes').on('click', function () {
    filterSlider()
    $('.universities__slider').slick('slickFilter', '.js-rus-universe');
    $('.js-rus-universes').addClass('btn--university-active');
});

$('.js-all-universes').on('click', function () {
    filterSlider();
    $('.js-all-universes').addClass('btn--university-active');
});

function filterSlider() {
    $('.universities__slider').slick('slickUnfilter');
    $('.btn-universities-nav').removeClass('btn--university-active');
}


$('.js-university-slider__next-btn').on('click', function () {
    $('.universities__slider').slick('slickNext');

});

$('.js-university-slider__prev-btn').on('click', function () {
    $('.universities__slider').slick('slickPrev');
});


// $('.universities__slider').on('init', function (slick) {
//     var active = $('.universities__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     first.addClass('opacity');
//     last.addClass('opacity');
// });

// $('.universities__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.universities__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     active.removeClass('opacity')
//     first.addClass('opacity');
//     last.addClass('opacity');
// });


$('.slick-slide').addClass('slick-slider-opacity');
//Убираем прозрачность у центральных элементов
$('.slick-slide.slick-active').eq(1).removeClass('slick-slider-opacity');
$('.slick-slide.slick-active').eq(2).removeClass('slick-slider-opacity');
//Вешаем обработчик на событие слайдера
$(".universities__slider").on("afterChange", function () {
    //Добавляем прозрачность всем элементам, обнуляя её у нужных
    $('.slick-slide').addClass('slick-slider-opacity');
    $('.slick-slide.slick-active').eq(1).removeClass('slick-slider-opacity');
    $('.slick-slide.slick-active').eq(2).removeClass('slick-slider-opacity');
});

// const sliders = document.querySelectorAll('.slick-active');

// [...sliders].forEach(item => {
//     console.log(item)
// })


