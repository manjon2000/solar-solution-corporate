window.addEventListener('DOMContentLoaded', () => {
    let iconMenu = document.querySelector('.header__icon-menu');
    let containerWrapperNavigation = document.querySelector('.header__navigation');


    iconMenu.addEventListener('click', () => {
        containerWrapperNavigation.classList.toggle('header__navigation--show');
    })

})