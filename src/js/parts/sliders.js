import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs, Scrollbar } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let scrollbar = section.querySelector('.swiper-scrollbar')
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('how')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

            })
        }
        else if (section.classList.contains('reviews')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Scrollbar
                ],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 20,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                scrollbar: {
                    el: scrollbar,
                    hide: false,
                },
            })
        }

    })
}

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
    beforeClose: function (instance, slide) {
        console.log(slide)
    }
});