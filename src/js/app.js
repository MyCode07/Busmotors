import { replaceDomElements } from "./static/replace.js";
// import { maskInputs } from "./static/inputmask.js";
import { animateAction } from "./parts/animations.js";
// import { accordeon } from "./static/accordeon.js";
import { stickyHeader } from "./parts/header.js";

import "./parts/menu.js";
import "./static/ticker.js";
import { Fancybox } from "@fancyapps/ui";

import "./parts/sliders.js";
import "./parts/cursor.js";
import "./parts/video.js";
import "./parts/filter.js";
import "./parts/read-more.js";
import "./parts/popup.js";
import { parallax } from "./parts/parallax.js";
// import "./parts/animations.js";

parallax();
// accordeon();
animateAction()
// maskInputs('+7 (999) 999-99-99', '._mask-phone')
replaceDomElements();
stickyHeader();



Fancybox.bind("[data-fancybox]", {
});




document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})