const btnStartEl = document.querySelector('[data-start]')
const btnStopEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStartEl.addEventListener('click', () =>{
  timerId = setInterval(() => {

    bodyEl.style.backgroundColor = getRandomHexColor();

    btnStartEl.disabled = true;
    
  }, 1000);
});

btnStopEl.addEventListener('click', () => {
  clearInterval(timerId);

  btnStartEl.disabled = false;
});

