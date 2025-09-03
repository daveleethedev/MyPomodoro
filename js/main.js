let clickCount = 0;
let myCounter;
let seconds = 0;
let minutes = 0;
let container = document.querySelector("#container");

let timeLimit = 15;   // tempo de foco (em minutos)
let breakTime = 5;    // tempo de descanso (em minutos)

let isBreak = false;  // controla se está em descanso ou estudando

const limitEl = document.getElementById("timeLimit");

function renderTimeLimit() {
  if (limitEl) limitEl.textContent = isBreak ? breakTime : timeLimit;
}

function resetTimer() {
  seconds = 0;
  minutes = 0;
}

function tick() {
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  // pega o limite dependendo do estado
  let currentLimit = isBreak ? breakTime : timeLimit;

  if (minutes >= currentLimit) {
    clearInterval(myCounter);

    if (!isBreak) {
      console.log("⏸️ Foco terminou! Iniciando descanso...");
      var audio = new Audio('js/audio/yipiee.mp3');
      audio.play();
      isBreak = true;   // troca para descanso
    } else {
      console.log("✅ Descanso terminou! Voltando pro foco...");
      var audio = new Audio('js/audio/omg bruh.mp3');
      audio.play();
      isBreak = false;  // volta pro foco
    }

    resetTimer();
    renderTimeLimit();
    myCounter = setInterval(tick, 1000); // reinicia o ciclo
  }

  let secDisplay = seconds < 10 ? "0" + seconds : seconds;
  let minDisplay = minutes < 10 ? "0" + minutes : minutes;

  container.innerHTML = `
    <div id="minutes">${minDisplay}:</div>
    <div id="seconds">${secDisplay}</div>
  `;
}

function displayTimer() {
  clickCount++;

  if (clickCount == 1) {
    console.log("▶️ Começou o Timer");
    myCounter = setInterval(tick, 1000);
  } else if (clickCount == 2) {
    console.log("⏸️ Pausou o Timer");
    clearInterval(myCounter);
    var audio = new Audio('js/audio/za warudo.mp3');
    audio.play();
  } else if (clickCount == 3) {
    console.log("⏯️ Continuou o Timer");
    myCounter = setInterval(tick, 1000);
    clickCount = 1;
  }
}

function restart() {
  resetTimer();
  container.innerHTML = `
    <div id="minutes">00:</div>
    <div id="seconds">00</div>
  `;
  isBreak = false; // volta pro modo de foco
  renderTimeLimit();
}

// funções pra alterar o tempo de foco
function setLimit(v) {
  timeLimit = Number(v);
  if (!isBreak) renderTimeLimit(); // só mostra se tiver em foco
}

function fifteen() { setLimit(15); }
function twenty() { setLimit(20); }
function twentyFive() { setLimit(25); }
function thirty() { setLimit(30); }
function thirtyFive() { setLimit(35); }

// render inicial
renderTimeLimit();
