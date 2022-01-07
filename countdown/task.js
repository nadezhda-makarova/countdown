let timer = document.getElementById('timer');

function startTimer(duration, display) {
  let timer = duration, seconds;
  setInterval(function () {
    seconds = parseInt(timer % 60, 10);
    display.textContent = seconds;

    if (seconds === 0) {
      alert('«Вы победили в конкурсе!»')
    }

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};

window.onload = function () {
  const timerValue = timer.textContent;
  startTimer(timerValue, timer);
};