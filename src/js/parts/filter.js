const filters = document.querySelectorAll('.catalog__filters-item');

if (filters.length) {
    filters.forEach(item => {
        const btn = item.querySelector('button');

        if (btn) {
            btn.addEventListener('click', () => {
                toggleTarget(item, filters, '_active');
            })

            const ul = btn.nextElementSibling
            if (ul) {
                const options = ul.querySelectorAll('li');
                if (options)
                    options.forEach(opt => {
                        opt.addEventListener('click', (e) => {
                            toggleTarget(opt, options, '_selected');
                        })
                    })
            }
        }
    });
}

function toggleTarget(target, targets, classname) {
    if (!target.classList.contains(classname)) {
        targets.forEach(item => {
            if (item.classList.contains(classname)) item.classList.remove(classname)
        })

        target.classList.add(classname)
    }
    else {
        target.classList.remove(classname)
    }
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.closest('.catalog__filters-item') && document.querySelector('.catalog__filters-item._active')) {
        const filter = document.querySelector('.catalog__filters-item._active');
        filter.classList.remove('_active')
    }

})