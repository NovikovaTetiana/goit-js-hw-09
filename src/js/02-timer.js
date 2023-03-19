import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const ref ={
 inputEl: document.querySelector("#datetime-picker"),
 btnStart: document.querySelector('.btn-start'),
 days: document.querySelector('[data-days]'),
 hours: document.querySelector('[data-hours]'),
 minutes: document.querySelector('[data-minutes]'),
 seconds: document.querySelector('[data-seconds]'),
};

flatpickr(ref.inputEl, {enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()){
      alert("Please choose a date in the future");
    } else {
      ref.btnStart.disabled = true;
      // ref.btnStart.addEventListener("click", handlerTimerStart)
    }
  },});

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); 
  console.log(convertMs(140000)); 
  console.log(convertMs(24140000)); 