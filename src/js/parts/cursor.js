// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
let lastX = -100;
let lastY = -100;
const cursor = document.querySelector('.cursor')
const section = document.querySelector('.projects')

// Show/hide the cursor when it is over the section
if (section) {
    section.addEventListener('mouseenter', () => {
        cursor.classList.add('visible')
    })

    section.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible')
    })
}

// function for linear interpolation of values
const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

const initCursor = () => {
    if (!cursor) return

    // add listener to track the current mouse position
    document.addEventListener('mousemove', e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the cursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        // lesser delta, greater the delay that the custom cursor follows the real cursor
        const delta = 0.1;
        lastX = lerp(lastX, clientX, delta);
        lastY = lerp(lastY, clientY, delta);

        cursor.style.transform = `translate(${lastX}px, ${lastY}px)`;

        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};

initCursor();

