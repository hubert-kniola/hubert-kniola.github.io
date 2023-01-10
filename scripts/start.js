let _started = false;
let _sound = document.getElementById("checkbox").checked;

function startGame() {
  let start = document.getElementById("game-main");
  let holder = document.getElementById("holder");

  start.classList.remove("hide");

  holder.style.display = "none";
  holder.classList.add("hide");

  let audio = new Audio("sounds/soundtrack.wav");
  let audio_start = new Audio("sounds/start.wav");
  if (_sound) {
    audio.play();
    audio_start .play();
  }
  
  Game.init();
}