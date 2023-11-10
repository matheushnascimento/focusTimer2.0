import * as control from "./elements.js";

export function registerControls() {
  control.timeControls.addEventListener("click", event => {
    console.log(event.target.dataset.action);
  });

  control.soundControls.addEventListener("click", event => {
    console.log(event.target.dataset.action);
  })
}
