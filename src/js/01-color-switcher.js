const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBtnStartDisabled() {
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
}

function changeBtnStopDisabled() {
  btnStopEl.disabled = true;
  btnStartEl.disabled = false;
}

btnStartEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    changeBtnStartDisabled();
  }, 1000);
});

btnStopEl.addEventListener('click', () => {
  clearInterval(timerId);

  changeBtnStopDisabled();
});
