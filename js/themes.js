let hero = document.getElementById("hero");
let config = document.getElementById("config-section");
let containerDiv = document.getElementById("container");
let todo = document.getElementById("to-do");


// ================== Temas ==================
function blueTheme(){
    localStorage.setItem("selectedTheme", "blue");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(35, 35, 82, 0.744), rgba(12, 12, 62, 0.645), rgba(78, 78, 143, 0.463))';
    config.style.backgroundColor = '#010d1ae6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(48, 48, 126, 0.563), rgba(89, 89, 179, 0.618))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(48, 48, 126, 0.621), rgba(89, 89, 179, 0.725))';
    containerDiv.style.color = '#bb1414ff;'
}

function greenTheme(){
    localStorage.setItem("selectedTheme", "green");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(11, 149, 29, 0.74), rgba(29, 211, 16, 0.65), rgba(21, 110, 15, 0.46))';
    config.style.backgroundColor = '#085406e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(16, 90, 23, 0.563), rgba(57, 179, 64, 0.618))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(16, 90, 23, 0.621), rgba(57, 179, 64, 0.725))';
}

function yellowTheme(){
    localStorage.setItem("selectedTheme", "yellow");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 215, 0, 0.8), rgba(255, 230, 128, 0.75), rgba(204, 170, 0, 0.6))';
    config.style.backgroundColor = '#b39400e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(204, 170, 0, 0.5), rgba(255, 215, 0, 0.6))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(204, 170, 0, 0.6), rgba(255, 230, 128, 0.7))';
}

function redTheme(){
    localStorage.setItem("selectedTheme", "red");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(178, 34, 34, 0.8), rgba(220, 20, 60, 0.7), rgba(139, 0, 0, 0.6))';
    config.style.backgroundColor = '#8b0000e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(139, 0, 0, 0.5), rgba(220, 20, 60, 0.6))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(139, 0, 0, 0.6), rgba(220, 20, 60, 0.7))';
}

function pinkTheme(){
    localStorage.setItem("selectedTheme", "pink");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 105, 180, 0.8), rgba(255, 182, 193, 0.7), rgba(199, 21, 133, 0.6))';
    config.style.backgroundColor = '#c71585e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(199, 21, 133, 0.5), rgba(255, 105, 180, 0.6))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(199, 21, 133, 0.6), rgba(255, 182, 193, 0.7))';
}

function darkTheme(){
    localStorage.setItem("selectedTheme", "black");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(30, 30, 30, 0.85), rgba(50, 50, 50, 0.8))';
    config.style.backgroundColor = '#000000e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(20, 20, 20, 0.6), rgba(60, 60, 60, 0.7))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(30, 30, 30, 0.6), rgba(80, 80, 80, 0.7))';

    containerDiv.style.color = '#fafafaff;'
}

function whiteTheme(){
    localStorage.setItem("selectedTheme", "light");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 247, 247, 0.46), rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.51))';
    config.style.backgroundColor = '#7a7a7a81';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(230, 230, 230, 0.6), rgba(255, 255, 255, 0.7))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(245, 245, 245, 0.6), rgba(255, 255, 255, 0.8))';
}

// ================== Restaurar tema salvo ==================
window.addEventListener("load", () => {
    let savedTheme = localStorage.getItem("selectedTheme");

    if (savedTheme === "blue") blueTheme();
    else if (savedTheme === "green") greenTheme();
    else if (savedTheme === "yellow") yellowTheme();
    else if (savedTheme === "red") redTheme();
    else if (savedTheme === "pink") pinkTheme();
    else if (savedTheme === "black") darkTheme();
    else if (savedTheme === "light") whiteTheme();
});
