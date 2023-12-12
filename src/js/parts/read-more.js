import { gsap } from "gsap";
const servicesPageRead = document.querySelector('.services-page__read');;

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_read-more')) {
        const showText = targetEl.dataset.showText;

        const text = targetEl.closest('section').querySelector('.text-content')
        const textContnet = targetEl.closest('section').querySelector('.read-more__content')
        if (textContnet) {
            textContnet.classList.toggle('_active');

            if (textContnet.classList.contains('_active')) {
                targetEl.textContent = 'Скрыть';

                gsap.to(text, {
                    height: 'auto',
                    duration: 0.3
                })
            }
            else {
                targetEl.textContent = showText;

                gsap.to(text, {
                    height: 320,
                    duration: 0.3
                })
            }
        }
    }
})