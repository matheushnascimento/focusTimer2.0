import * as control from "./elements.js";

export function registerControls() {
  control.timeControls.addEventListener("click", event => {
    console.log('time control clicked');
  });

  control.soundControls.addEventListener("click", event => {
    console.log('sound control clicked');
  })
}
