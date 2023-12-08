import { replaceDomElements } from "./static/replace.js";
import { maskInputs } from "./static/inputmask.js";
import { animateAction } from "./parts/animations.js";
import { accordeon } from "./static/accordeon.js";

import "./parts/animations.js";
import "./parts/menu.js";
import "./parts/sliders.js";

accordeon();
animateAction()
maskInputs('+7 (999) 999-99-99', '._mask-phone')
replaceDomElements();


document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})

