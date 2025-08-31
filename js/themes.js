let hero = document.getElementById("hero");
let config = document.getElementById("config-section");
let containerDiv = document.getElementById("container");
let todo = document.getElementById("to-do");

// ================== Temas ================== //
function blueTheme(){
    localStorage.setItem("selectedTheme", "blue");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(35, 35, 82, 0.744), rgba(12, 12, 62, 0.645), rgba(78, 78, 143, 0.463))';
    config.style.backgroundColor = '#010d1ae6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(48, 48, 126, 0.563), rgba(89, 89, 179, 0.618))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(48, 48, 126, 0.621), rgba(89, 89, 179, 0.725))';
    min.style.color = '#fff'
    seg.style.color = '#fff'
}

function greenTheme(){
    localStorage.setItem("selectedTheme", "green");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(11, 149, 29, 0.74), rgba(29, 211, 16, 0.65), rgba(21, 110, 15, 0.46))';
    config.style.backgroundColor = '#085406e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(10, 179, 27, 0.56), rgba(33, 194, 41, 0.62))';
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

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(105, 19, 19, 0.8), rgba(161, 26, 53, 0.8), rgba(197, 30, 30, 0.6))';
    config.style.backgroundColor = '#8b0000e6';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(139, 0, 0, 0.5), rgba(220, 20, 60, 0.6))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(79, 5, 5, 0.6), rgba(220, 20, 60, 0.7))';
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
    min.style.color = '#fff'
    seg.style.color = '#fff'
}

function whiteTheme(){
    localStorage.setItem("selectedTheme", "light");

    hero.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 247, 247, 0.46), rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.51))';
    config.style.backgroundColor = '#7a7a7a81';
    containerDiv.style.backgroundImage = 'linear-gradient(to right bottom, rgba(198, 173, 173, 0.83), rgba(174, 152, 152, 0.7))';
    todo.style.backgroundImage = 'linear-gradient(to right bottom, rgba(173, 173, 173, 0.84), rgba(162, 162, 162, 0.82))';
}

// ================== Restaurar tema salvo ==================
let savedTheme = localStorage.getItem("selectedTheme");
window.addEventListener("load", () => {
    

    if (savedTheme === "blue") blueTheme();
    else if (savedTheme === "green") greenTheme();
    else if (savedTheme === "yellow") yellowTheme();
    else if (savedTheme === "red") redTheme();
    else if (savedTheme === "pink") pinkTheme();
    else if (savedTheme === "black") darkTheme();
    else if (savedTheme === "light") whiteTheme();
 

});
 document.getElementById("themeInfo").innerHTML = savedTheme



const fileInput = document.getElementById("fileInput");
const applyBtn = document.getElementById("applyBtn");

const colorBg = document.getElementById("colorInput")
const solidBtn = document.getElementById("solidColorBtn")


//Função para aplicar a cor sólida 
function setBackgroundColor(){
    
}

// Função para aplicar o wallpaper
function setWallpaper(imageData) {
  document.body.style.backgroundImage = `url('${imageData}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  
  document.getElementById("config").style.backgroundImage = `url('${imageData}')`;
  document.getElementById("config").style.backgroundSize = "cover";
  document.getElementById("config").style.backgroundPosition = "center";

  document.getElementById("painel").style.backgroundImage = `url('${imageData}')`;
  document.getElementById("painel").style.backgroundSize = "cover";
  document.getElementById("painel").style.backgroundPosition = "center";
}

// Ao carregar a página, verifica se tem wallpaper salvo
window.addEventListener("load", () => {
  const savedWallpaper = localStorage.getItem("wallpaper");
  if (savedWallpaper) {
    setWallpaper(savedWallpaper);
  }
});

// Ao clicar no botão, aplica e salva
applyBtn.addEventListener("click", () => {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const imageData = e.target.result;
      setWallpaper(imageData);

      // Salva no localStorage
      localStorage.setItem("wallpaper", imageData);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Escolhe um wallpaper primeiro, Meu galo! 🐓");
  }
});

