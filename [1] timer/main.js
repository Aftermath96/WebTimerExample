let timer;
let startTime;
let duration;
let isTimerRunning = false;

const durationInput = document.getElementById('duration');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timerDisplay = document.getElementById('timer');

startButton.addEventListener('click', () => {
    if (!isTimerRunning) {
        if (durationInput.value > 0) {
            duration = durationInput.value;
            startTime = Date.now();
            isTimerRunning = true;
            startTimer();
        } else {
            alert('Please enter a valid time.');
        }
    }
});

stopButton.addEventListener('click', () => {
    if (isTimerRunning) {
        clearInterval(timer);
        isTimerRunning = false;
        timerDisplay.textContent = 'Timer Stopped';
    }
});

function startTimer() {
    timer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const remainingTime = duration - elapsedTime;

        if (remainingTime >= 0) {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            clearInterval(timer);
            isTimerRunning = false;
            timerDisplay.textContent = 'Time Expired!';
        }
    }, 1000);
}
