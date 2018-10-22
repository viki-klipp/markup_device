'use strict';

(function () {
    const buttons = Array.from(document.querySelectorAll('.features-nav a'));
    const items = Array.from(document.querySelectorAll('.fetaures-item'));

    const clickHandler = (evt) => {
        evt.preventDefault();
        resetValues();

        evt.target.classList.add('active');
        let index = evt.target.getAttribute('data-index');
        items[index].style.display = 'block';
    };

    const resetValues = () => {
        buttons.forEach((el, i) => {
            el.setAttribute('class', 'btn');
        });

        items.forEach((el, i) => {
            el.style.display = 'none';
        });
    };

    buttons.forEach((el, i) => {
        el.addEventListener('click', clickHandler);
        el.setAttribute("data-index", i);

        if (i === 0) {
            el.classList.add('active');
        }
    });

    items.forEach((el, i) => {
        el.setAttribute("data-index", i);
        el.style.display = 'none';

        if (i === 0) {
            el.style.display = 'block';
        }
    });
})();