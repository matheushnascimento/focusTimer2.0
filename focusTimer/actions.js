import state from "./state.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";
import * as sounds from "./sound.js";

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

//sound controls
export function setSong(songId) {
  const button = el.soundControls.getElementsByTagName("button");

  for (let i = 0; i < button.length; i++) {
    if (button[i].classList.contains("selected") && button[i].id != songId) {
      button[i].classList.remove("selected");
    } else if (button[i].id == songId) {
      button[i].classList.add("selected");
    }
  }

  playSong(songId);
}

function playSong(songId) {
  Object.values(sounds).forEach(audio => {
    audio.pause();
  });
  switch (songId) {
    case "forest":
      sounds.forest.play();
      break;

    case "rain":
      sounds.rain.play();
      break;

    case "coffee":
      sounds.coffee.play();
      break;

    case "campfire":
      sounds.campfire.play();
      break;
  }
}
