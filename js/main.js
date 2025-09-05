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
      var audioyipiee = new Audio('js/audio/yipiee.mp3');
      audioyipiee.play();
      isBreak = true;   // troca para descanso
    } else {
      console.log("✅ Descanso terminou! Voltando pro foco...");
      
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


function soundOff(){
  let soundBtn = document.getElementById("soundBtn")
  soundBtn.innerHTML =   `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x-icon lucide-volume-x"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`
}

