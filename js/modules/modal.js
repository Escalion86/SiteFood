//Модальное окно
function modal() {
    const modalWindow = document.querySelector('.modal'),
          modalOpeners = document.querySelectorAll('[data-modal]');

    modalOpeners.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    function openModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        //modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimerID);
    }

    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        //modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }

    /* modalClosers.forEach((item) => {
        item.addEventListener('click', closeModal);
    }); */

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27 && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerID = setTimeout(openModal, 300000);

    function openModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }

    window.addEventListener('scroll', openModalByScroll);
}

module.exports = modal;