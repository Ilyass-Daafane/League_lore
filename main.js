//nav-bar
const logo = document.querySelector('.logo')
const home = document.querySelector('.home');
const champions = document.querySelector('.champions');
const about = document.querySelector('.about');

logo.addEventListener('click', function() {
    home.classList.add('current');
    champions.classList.remove('current');
    about.classList.remove('current');
});
home.addEventListener('click', function() {
    home.classList.add('current');
    champions.classList.remove('current');
    about.classList.remove('current');
});
champions.addEventListener('click', () => {
    home.classList.remove('current');
    champions.classList.add('current');
    about.classList.remove('current');
});
about.addEventListener('click', () => {
    home.classList.remove('current');
    champions.classList.remove('current');
    about.classList.add('current');
});
// hero-section
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    });

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    });

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    });

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    });



 