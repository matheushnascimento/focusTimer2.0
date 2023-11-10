import state from "./state.js";

export function startRunning() {
  console.log("play");
  state.isRunning = document.documentElement.classList.add("running");
}

export function stopRunning() {
  console.log("stop");
  state.isRunning = document.documentElement.classList.remove("running");
}
export function plus5Sec() {
  console.log("+5sec");
}
export function minus5Sec() {
  console.log("-5sec");
}
