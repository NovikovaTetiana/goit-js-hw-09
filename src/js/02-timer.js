import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('.btn-start'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timerId = null;

flatpickr(refs.inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chooseDay(selectedDates);
  },
});

function chooseDay(selectedDates) {
  if (selectedDates[0] < Date.now()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    refs.btnStart.disabled = false;
    return;
  } else {
    refs.btnStart.disabled = true;
    refs.btnStart.addEventListener('click', handlerStarTimer);
    
    handlerStarTimer();

    function handlerStarTimer() {
      timerId = setInterval(() => {
        const currentDate = new Date();
        const differetnTime = selectedDates[0] - currentDate;
        const clock = convertMs(differetnTime)
        updateClockFase (clock)
    
        if (differetnTime <= 1000) {
          clearInterval(timerId);
        return;
        };
      }, 1000);
    }
  }
}

function updateClockFase ({days, hours, minutes, seconds}){
  refs.days.textContent = days,
  refs.hours.textContent = hours,
  refs.minutes.textContent = minutes,
  refs.seconds.textContent = seconds
}

  function addLeadingZero(differetnTime) {
      return String(differetnTime).padStart(2, '0');
    }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

