var menu = document.querySelector('#menu-btn');
menu.addEventListener('click', test);

function test() {
    var el = document.querySelector('.main-nav');
    el.classList.toggle('show');
}