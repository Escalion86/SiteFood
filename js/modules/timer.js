//Таймер
function timer() {
    const timer = document.querySelector('.timer'),
          timerDays = document.querySelector('#days'),
          timerHours = document.querySelector('#hours'),
          timerMinutes = document.querySelector('#minutes'),
          timerSeconds = document.querySelector('#seconds'),
          dateFinish = Date.parse("2020-09-30");

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimer() {
        let now = new Date(),
            dateDif = new Date(dateFinish - now),
            days = dateDif.getDate(),
            hours = dateDif.getHours(),
            minutes = dateDif.getMinutes(),
            seconds = dateDif.getSeconds();

        timerDays.textContent = getZero(days);
        timerHours.textContent = getZero(hours);
        timerMinutes.textContent = getZero(minutes);
        timerSeconds.textContent = getZero(seconds);

        if (dateDif <= 0) {
            clearInterval(timerRefresh);
        }
    }

    const timerRefresh = setInterval(setTimer, 1000);
    setTimer();
}

module.exports = timer;