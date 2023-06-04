const time = document.querySelector(".watch .time");
const startBtn = document.querySelector(".controls .start");
const stopBtn = document.querySelector(".controls .stop");
const resetBtn = document.querySelector(".controls .reset");

let seconds = 0;
let interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function stopWatch() {
    seconds++;
    let hrs = Math.floor(seconds / (60 * 60));
    let mins = Math.floor((seconds - hrs * 3600) / 60);
    let secs = Math.floor(seconds % 60);

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    time.innerHTML = `<span>${hrs}:${mins}:${secs}</span>`;
}

function start() {
    if (interval) {
        return;
    }
    interval = setInterval(stopWatch, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time.innerHTML = `<span>00:00:00</span>`;
}
