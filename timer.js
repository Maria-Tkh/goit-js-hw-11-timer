// new CountdownTimer({
//         selector: '#timer-1',
//         targetDate: new Date('Jul 31, 2021'),
//     });

const clockface = document.querySelector('#timer-1')
const timer = {
    start() {
        const targetTime = new Date("July 31, 2021 23:59:59");
        setInterval(() => {
            const currentTime = Date.now();
            const time = targetTime - currentTime;
            const timeLeft = getTimeComponents(time);

            // console.log(`${days}:${hours}:${mins}:${secs}`);
            updateClockface(timeLeft);

            // console.log(clockface.textContent);
        }, 1000);
    },
};
timer.start();


function getTimeComponents(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
};

function pad(value) {
    return String(value).padStart(2, '0');
};


//   function day(value) {
//     return String(value).padStart(3, '0');
//   };


function updateClockface({ days, hours, mins, secs }) {
    clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}
