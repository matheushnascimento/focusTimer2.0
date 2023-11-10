import * as control from "./elements.js";
import * as el from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  control.timeControls.addEventListener("click", event => {
    const action = event.target.dataset.action;

    if (typeof action === "undefined") {
      console.log("não é um botão");
      return;
    }

    actions[action]();f
  });

  control.soundControls.addEventListener("click", event => {
    console.log(event.target.dataset.action);
  });
}
