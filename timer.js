class CountdownTimer {
  constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
  }
  start() {
      setInterval(() => {
          const currentDate = Date.now();
          const time = this.targetDate - currentDate;
          const timeLeft = this.getTimeComponents(time);
          this.updateClockface(timeLeft);
      }, 1000);
  }
  getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
  }
  pad(value) {
      return String(value).padStart(2, '0');
  }
  updateClockface({ days, hours, mins, secs }) {
    const clockface = document.querySelector(this.selector);
    clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
  }
};
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date("July 31, 2021 23:59:59"),
});
timer.start();