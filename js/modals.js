'use strict';

(function () {
    const btnFeedback = document.querySelector('.contacts .btn');
    const btnClose = document.querySelector('.modal-close');
    const feedbackForm = document.querySelector('.feedback');

    console.log(btnClose);

    btnFeedback.addEventListener('click', (evt) => {
        evt.preventDefault();
        feedbackForm.style.display = 'block';
    });

    btnClose.addEventListener('click', (evt) => {
        evt.preventDefault();
        feedbackForm.style.display = 'none';
    });
})();