import { updateDisplay } from "./timer.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";

export function registerControls() {
  el.timeControls.addEventListener("click", event => {
    const action = event.target.dataset.action;

    if (typeof action === "undefined") {
      console.log("não é um botão");
      return;
    }

    actions[action]();
  });

  el.soundControls.addEventListener("click", event => {
    const action = event.target.dataset.action;
    const songId = event.target.id;

    if (typeof action === "undefined") {
      console.log("não é um botão");
      return;
    }

    actions[action](songId);
  });

  el.minutes.addEventListener("click", event => {
    const action = event.target.dataset.action;

    if (typeof action === "undefined") {
      console.log("não é um botão");
      return;
    }

    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", event => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = event => /\d/.test(event.key);
  el.minutes.addEventListener("blur", event => {
    let time = el.minutes.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
