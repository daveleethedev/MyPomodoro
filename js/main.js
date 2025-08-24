let clickCount = 0;
let myCounter;
let seconds = 0;
let minutes = 0;
let container = document.querySelector("#container")
let timeLimit = 15;
  
function displayTimer()  { //função chamada ao apertar o botão
  

  

  clickCount ++;

    function tick() { // Contador
    seconds++;
    if (seconds >= 60){
        minutes++;
        seconds = 0;
    }

    if (minutes >= timeLimit){
      clearInterval(myCounter)
      var audio = new Audio('js/audio/yipiee.mp3');
      audio.play();
      
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

  }
  if ( clickCount == 2){
    console.log("Pausou O Timer")
    clearInterval(myCounter)  
    var audio = new Audio('js/audio/za warudo.mp3');
    audio.play();
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
    if(minutes < timeLimit){
      var audio = new Audio('js/audio/omg bruh.mp3');
    audio.play();
    }
    
}


