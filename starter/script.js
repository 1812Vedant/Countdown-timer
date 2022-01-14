const newYears = `1 Jan 2023`;
const bittuDate = `24 Aug 2023`;
const bittuBorn = `24 Aug 2006`;

//new Date()=>gives currentDate and arg passed give date we decided in correct format
//get Date()
//padStart()

//parent
const defineDays = document.querySelector(".days-c");
const defineHours = document.querySelector(".hours-c");
const defineMinutes = document.querySelector(".min-c");
const defineSeconds = document.querySelector(".seconds-c");

//child
const defineDaysInner = defineDays.querySelector(".big-text");
const defineHoursInner = defineHours.querySelector(".big-text");
const defineMinutesInner = defineMinutes.querySelector(".big-text");
const defineSecondsInner = defineSeconds.querySelector(".big-text");

const countdown = function () {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  //console.log(newYearsDate);
  //console.log(currentDate);

  const seconds = (newYearsDate - currentDate) / 1000;
  const totalSeconds = Math.floor(seconds) % 60;
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  //console.log(days, hours, minutes, totalSeconds);
  defineDaysInner.innerText = days;
  defineHoursInner.innerText = hours;
  defineMinutesInner.innerText = minutes;
  defineSecondsInner.innerText = totalSeconds;
};
countdown();
setInterval(countdown, 1000);
