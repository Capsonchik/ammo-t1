const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);

      if(seconds <= 0) {
        clearInterval(timer)
        timerEl.innerHTML = 'hh:mm:ss'
        alert('timer is done')
        buttonEl.disabled = false
      } else {
        timerEl.innerHTML = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
      }

      --seconds

    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  const value = event.target.value;
  const lastChar = value[value.length - 1];
  if (isNaN(lastChar)) {
    event.target.value = value.slice(0, -1);
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
  buttonEl.disabled = true
  inputEl.value = '';
});
