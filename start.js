let _started = false;
let _sound = document.getElementById("checkbox").checked;

function startGame() {
  let start = document.getElementById("game-main");
  let holder = document.getElementById("holder");

  start.classList.remove("hide");

  holder.style.display = "none";
  holder.classList.add("hide");

  if (document.querySelector("#checkbox").checked) {
    let audio = new Audio("./soundtrack.mp3");
    let audio_start = new Audio("./start.wav");
    audio.volume = 0.2;
    audio_start.volume = 0.4;
    audio.play();
    audio_start.play();
  }

  Game.init();
}
