const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const MenuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(a) {
        iconMenu.classList.toggle('active');
        MenuBody.classList.toggle('active');
    });
}