import { gsap } from "gsap";
const servicesPageRead = document.querySelector('.services-page__read');;

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_read-more')) {
        const showText = targetEl.dataset.showText;

        const textContnet = targetEl.closest('.section__flex').querySelector('ol')
        if (textContnet) {
            textContnet.classList.toggle('_active');

            if (textContnet.classList.contains('_active')) {
                targetEl.textContent = 'Скрыть';

                gsap.to(textContnet, {
                    height: 'auto',
                    duration: 0.3
                })

            }

            else {
                if (servicesPageRead) {
                    targetEl.textContent = showText;
                    gsap.to(textContnet, {
                        height: 328,
                        duration: 0.3
                    })
                }
                else {
                    targetEl.textContent = showText;
                    gsap.to(textContnet, {
                        height: 170,
                        duration: 0.3
                    })
                }
            }
        }
    }
})