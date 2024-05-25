// import Swiper JS
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
// import Swiper styles
const swiper = new Swiper('.swiper', {
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
