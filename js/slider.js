'use strict';

(function () {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const switcher = Array.from(document.querySelectorAll('.switcher input'));
    let counter = 1;

    slides.forEach((el, i) => {
        if (i === 0) {
            el.style.display = "flex";
            switcher[i].checked = true;
        } else{
            el.style.display = "none";
        }
    });

    switcher.forEach((el) => {
        el.addEventListener('click', () => {
            showSlide(el.getAttribute('id').match(/[0-9]/i)[0]);
        });
    });


    function showSlide(n) {
        slides.forEach((el) => {
            el.style.display = "none";
        });

        switcher.forEach((el) => {
            el.checked = false;
        });

        switcher[n].checked = true;
        slides[n].style.display = "flex";
    };

    window.setInterval(() => {
        if (counter > slides.length - 1) {
            counter = 0;
        }

        showSlide(counter++);
    }, 4000);
})();