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


        if (section.classList.contains('projects')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Scrollbar
                ],
                slidesPerView: 'auto',

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                scrollbar: {
                    el: scrollbar,
                    hide: false,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 20
                    },
                    768: {
                        spaceBetween: 30
                    }
                }
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