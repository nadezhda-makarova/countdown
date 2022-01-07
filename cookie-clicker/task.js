const btn = document.getElementById('cookie');
btn.addEventListener('click', cookieClick);
const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
cookie.addEventListener('click', changeSize);
let countClick = 0;

function cookieClick() {
  clickerCounter.innerHTML = countClick + 1;
  countClick = countClick + 1;
};

function changeSize() {
  setTimeout(function () {
    cookie.style.width = '200px';
  }, 100);
  cookie.style.width = '250px';
};
