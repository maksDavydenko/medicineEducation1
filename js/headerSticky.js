document.addEventListener('DOMContentLoaded', function () {
    const headerWrap = document.querySelector('.header');
    const upBtn = document.querySelector('.upBtn');
    const applyBtn = document.querySelector('.connection-info__btn--sticky');
    const hoverItems = document.querySelectorAll('.hover-items');


    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            headerWrap.classList.add('header--sticky');
            upBtn.style.display = 'flex';
            applyBtn.classList.add('button--sticky');
            hoverItems.forEach(item => item.classList.add('hover-items--stiky'))


        } if (window.pageYOffset < 100) {
            headerWrap.classList.remove('header--sticky');
            upBtn.style.display = 'none';
            applyBtn.classList.remove('button--sticky');
            hoverItems.forEach(item => item.classList.remove('hover-items--stiky'))


        }
    });

    upBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })


    let $element = $('.footer');
    let counter = 0;

    $(window).scroll(function () {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $element.offset().top

        if (scroll > offset - 150 && counter == 0) {
            $('.upBtn').css('position', 'static');
            $('.upBtn').css('transform', 'translate(0, 0)');
        }

        if (scroll < offset - 150 && counter == 0) {
            $('.upBtn').css('position', 'fixed');
            $('.upBtn').css('transform', 'translate(-50%, 0)');

        }
    });


})




