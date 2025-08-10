let hero = document.getElementById("hero");
let config = document.getElementById("config-section");
let containerDiv = document.getElementById("container");
let todo = document.getElementById("to-do");

function blueTheme(){
    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(35, 35, 82, 0.744), rgba(12, 12, 62, 0.645),rgba(78, 78, 143, 0.463))';

    config.style.backgroundColor = ' background-color: #010d1ae6;'

    container.style.backgroundImage = 'linear-gradient(to right bottom,rgba(48, 48, 126, 0.563), rgba(89, 89, 179, 0.618))'
    
    todo.style.backgroundImage = 'linear-gradient(to right bottom,rgba(48, 48, 126, 0.621), rgba(89, 89, 179, 0.725));'
}
