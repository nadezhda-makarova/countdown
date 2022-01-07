const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;

function addEventListener() {
  let selectorArr = document.querySelectorAll('.hole');
  selectorArr.forEach((item) => {
    item.addEventListener('click', clickHole)
  })
}

window.onload = function () {
  addEventListener();
};

function clickHole(v) {
  const selectElem = v.target;
  if (selectElem.classList.contains('hole_has-mole')) {
    dead.innerHTML = deadCount + 1;
    deadCount = deadCount + 1;
    if (deadCount > 9) {
      lostCount = 0;
      deadCount = 0;
      dead.innerHTML = 0;
      lost.innerHTML = 0;
      return alert('Вы выиграли!');
    }
  } else {
    lost.innerHTML = lostCount + 1;
    lostCount = lostCount + 1;
    if (lostCount > 4) {
      dead.innerHTML = 0;
      lost.innerHTML = 0;
      lostCount = 0;
      deadCount = 0;
      return alert('Вы проиграли!');;
    }
  }

}