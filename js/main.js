let clickCount = 0;
let myCounter;
let seconds = 0;
let minutes = 0;
let container = document.querySelector("#container")
  
function displayTimer()  { //função chamada ao apertar o botão
  

  let timeLimit = 15;

  clickCount ++;

    function tick() { // Contador
    seconds++;
    if (seconds >= 60){
        minutes++;
        seconds = 0;
    }

    if (minutes >= timeLimit){
      clearInterval(myCounter)
      
    }

    let secDisplay = seconds < 10 ? "0" + seconds : seconds;
    let minDisplay = minutes < 10 ? "0" + minutes : minutes;

    container.innerHTML = `    
    <div id="minutes"> ${minDisplay}:</div>
    <div id="seconds"> ${secDisplay}</div>
    `  
    }

  if ( clickCount == 1){
    console.log("Começou O Timer")
      myCounter = setInterval(tick, 1000);
      var audio = new Audio('yipiee.mp3');
      audio.play();
  }

  if ( clickCount == 2){
    console.log("Pausou O Timer")
    clearInterval(myCounter)  
  }   
  
  if (clickCount ==  3){
    console.log("Continuou o timer")
     myCounter = setInterval(tick, 1000);
    clickCount = 1;
  }
}

function restart(){
  minutes = 0
  seconds = 0
  container.innerHTML = `    
    <div id="minutes"> 00:</div>
    <div id="seconds"> 00</div>
    `  
}


