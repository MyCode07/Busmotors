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


if (document.querySelector('.gallery-slide')) {
    var swiper123 = new Swiper(".mySwiper", {
        modules: [
            Navigation, Pagination, Scrollbar, Thumbs, FreeMode
        ],
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                spaceBetween: 4,

            },
            768: {
                spaceBetween: 17,

            }
        }
    });

    new Swiper(".mySwiper2", {
        modules: [
            Navigation, Pagination, Scrollbar, Thumbs
        ],
        spaceBetween: 10,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        thumbs: {
            swiper: swiper123,
        },
    });
}

if (document.querySelector('.single')) {
    var swiper123 = new Swiper(".mySwiper", {

        modules: [
            FreeMode
        ],
        direction: 'vertival',
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        spaceBetween: 12,

        breakpoints: { 
            320: {
                spaceBetween: 7,
                direction: 'horizontal',
            },
            768: {
                spaceBetween: 12,
            },
            993: {
                direction: 'vertival',
            }
        }
    });

    new Swiper(".mySwiper2", {
        modules: [
            Navigation, Pagination, Scrollbar, Thumbs
        ],
        spaceBetween: 10,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "fraction",
        },

        thumbs: {
            swiper: swiper123,
        },
    });
}