import * as el from "./elements.js";
import * as actions from "./actions.js";
import * as control from "./elements.js";

export function registerControls() {
  control.timeControls.addEventListener("click", event => {
    const action = event.target.dataset.action;

    if (typeof action === "undefined") {
      console.log("não é um botão");
      return;
    }

    actions[action]();
  });

  control.soundControls.addEventListener("click", event => {
    console.log(event.target.dataset.action);
  });

  control.minutes.addEventListener("focus", actions.set());
}

export function setMinutes() {
  el.minutes.addEventListener("focus", event => {
    el.minutes.textContent = "00";
  });
}
