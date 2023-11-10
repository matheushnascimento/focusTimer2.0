import state from "./state.js";
import * as el from "./elements.js";

export function startRunning() {
  console.log("play");
  state.isRunning = document.documentElement.classList.add("running");
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
  console.log("+5sec");
}
export function minus5Sec() {
  console.log("-5sec");
}
