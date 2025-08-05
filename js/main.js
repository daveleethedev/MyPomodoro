let myTimer = null;
let paraContagem = false;
let clickCount = 0;

function contador() {
  let minutes = 0;
  let seconds = 0;
  let limit = 15;
  let container = document.querySelector(".container");

  myTimer = setInterval(tick, 1000);

  function tick() {
    if (paraContagem) {
      clearInterval(myTimer);
      console.log("Contador pausado");
      return;
    }

    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    let secDisplay = seconds < 10 ? "0" + seconds : seconds;
    let minDisplay = minutes < 10 ? "0" + minutes : minutes;

    container.innerHTML = `
      <div id="minutes">${minDisplay}</div>
      <div id="seconds">:${secDisplay}</div>
    `;

    if (minutes >= limit) {
      clearInterval(myTimer);
      console.log("Chega Chega");
    }
  }
}

document.getElementById("pauseAndPlay").addEventListener("click", function () {
  clickCount++;

  if (clickCount === 1) {
    console.log("Contando");
    paraContagem = false;
    contador();
  } else if (clickCount === 2) {
    console.log("Pausou");
    paraContagem = true;
    clickCount = 0;
  }
});
