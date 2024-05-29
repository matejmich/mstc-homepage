// import Swiper JS
// @ts-ignore
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
const swiper = new Swiper('.swiper', {
    initialSlide: 1,
    speed: 900,
    parallax: true,
    slidesPerView: 1,
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            const text = index === 0 ? 'kámen pro firmu' : 'kámen domů';
            const customClassName = index === 0 ? 'first-slide' : 'second-slide';
            return `<span class="${className} ${customClassName}">${text}</span>`;
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
