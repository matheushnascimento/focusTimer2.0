import state from "./state.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";

export function startRunning() {
  console.log("play");
  state.isRunning = document.documentElement.classList.add("running");
  timer.countDown();
}
export function stopRunning() {
  console.log("stop");
  state.isRunning = document.documentElement.classList.remove("running");
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function plus5Sec() {
  let seconds = Number(el.seconds.textContent);
  seconds += 5;
  timer.updateDisplay(null, seconds);
}
export function minus5Sec() {
  console.log("-5sec");
}
