const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const MenuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(a) {
        iconMenu.classList.toggle('active');
        MenuBody.classList.toggle('active');
    });
}

function ibg(){
   let ibg=document.querySelectorAll('.ibg');
   for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
          ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
   }
}
ibg();