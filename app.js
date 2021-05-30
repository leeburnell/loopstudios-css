const wd = document.defaultView;
const mobileButton = document.querySelector('.header__navigation--mobile');
const mobileButtonImg = document.querySelector('.header__navigation--mobile img');
const mobilenav = document.querySelector('.header__navigation--mobilenav');

mobileButton.addEventListener('click', function () {
  if (mobilenav.classList.contains('open')) {
    mobilenav.classList.remove('open');
    document.body.style.overflow = 'auto';
    mobileButtonImg.src = './images/icon-hamburger.svg';
  } else {
    mobilenav.classList.toggle('open');
    document.body.style.overflow = 'hidden';
    mobileButtonImg.src = './images/icon-hamburger-closed.svg';
  }
});

wd.addEventListener('resize', function () {
  if (window.innerWidth > 750) {
    mobilenav.classList.remove('open');
  }
});