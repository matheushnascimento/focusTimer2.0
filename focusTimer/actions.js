import state from "./state.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";

export function startRunning() {
  console.log("play");
  document.documentElement.classList.add("running");
  state.isRunning = true;
  console.log(state.isRunning);
  timer.countDown();
}
export function stopRunning() {
  console.log("stop");
  document.documentElement.classList.remove("running");
  state.isRunning = false;
  console.log(state.isRunning);
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
  let seconds = Number(el.seconds.textContent);
  seconds -= 5;
  timer.updateDisplay(null, seconds);
}
