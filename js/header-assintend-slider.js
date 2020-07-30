import data from './slliderData.js';

const title = document.querySelector('.js-title');
// $('.js-title');
const info = document.querySelector('js-info');
const link = document.querySelector('.js-link');
const headerSlider = document.querySelector('.header-slider')


$(document).ready(function () {
    $('.header-assistent-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        speed: 500,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 5000,


        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


//suctom buttons
let curSlide = 1;
$('.js-header-slide-prev').on('click', function () {
    $('.header-assistent-slider').slick('slickPrev');

    curSlide--;
    curSlide = curSlide < 1 ? 6 : curSlide;
    changeSlide();
    changeContent();

});



$('.js-header-slide-next').on('click', function () {
    $('.header-assistent-slider').slick('slickNext');
    curSlide++;
    curSlide = curSlide > 6 ? 1 : curSlide;

    changeSlide();
    changeContent();

});

let nums = $('.header-slider__nav-item');
document.querySelectorAll('.header-slider__nav-item')
nums = Array.from(nums);

function changeSlide() {
    let activeIndex = null;
    nums.forEach((element, index) => {
        if (element.classList.contains('header-slider__nav-item--active')) {
            activeIndex = index + 1;
        }
        element.classList.remove('header-slider__nav-item--active');

    });

    let indexUp = 1;
    let indexDown = 1;
    const opacityIndex = 0.15;

    for (let i = curSlide; i < nums.length; i++) {
        nums[i].style.opacity = 1 - indexUp * opacityIndex;
        indexUp++
    }

    for (let i = curSlide - 1; i > 0; i--) {
        nums[i - 1].style.opacity = 1 - indexDown * opacityIndex;
        indexDown++
    }

    nums[curSlide - 1].classList.add('header-slider__nav-item--active')

}

function changeContent() {
    title.textContent = data[curSlide - 1].title;
    // info.textContent = data[curSlide - 1].info;

    // link.href = data[curSlide - 1].link;
    // headerSlider.style.backgroundImage = data[curSlide - 1].img;
    console.log(title)



}



changeSlide()

console.log(data)