

// SHOW TIMER

function startTimer(duration, display) {
    var getTimer = duration, minutes, seconds;
    var setTimer = setInterval(function () {
        minutes = parseInt(getTimer / 60, 10);
        seconds = parseInt(getTimer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        console.log(display.textContent);

        if (--getTimer < 0) {
            getTimer = duration;
            clearInterval(setTimer); // stop the timer
            alert("Uh oh! Time is up!"); // alert user that time is up
            window.open("./timeout.html", "_self"); // open a new window
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 10 * 1;
    display = document.querySelector('#qTimer');
    startTimer(oneMinute, display);
};

earnPoints();