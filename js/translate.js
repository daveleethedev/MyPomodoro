// js/translate.js

// dicionário de traduções
const translations = {
  "pt-BR": {
    chooseImage: "Escolher Imagem",
    save: "Salvar",
    timeLimit: "Tempo Limite:",
    appInfo: "O MyPomodoro é um Aplicativo de pomodoro Pra Te Ajudar A Estudar e Focar,  Mas Nele Você Personaliza Como Quiser.O Código é \"noob-friendly\" pois é feito pra iniciantes darem fork e fazerem suas próprias versões com seu próprio código ele tem explicação de cada coisa no código pra vc conseguir editar do seu jeito",
    version: "Versão: v1.0",
    stack: "Stack: HTML5, ES6 (Javascript), CSS3.",
    madeBy: "Feito com ❤️ por DaveLee",
    add: "Adicionar",
    warning: "Clique no botão + Para adicionar <br> ou aperte enter"
  },
  "en": {
    chooseImage: "Choose Image",
    save: "Save",
    timeLimit: "Time Limit:",
    appInfo: "MyPomodoro is a Pomodoro App to Help You Study and Focus, but You Can Customize It However You Want. The code is 'noob-friendly' since it’s made for beginners to fork and make their own versions with their own code. It has explanations of each part so you can edit it your way.",
    version: "Version: v1.0",
    stack: "Stack: HTML5, ES6 (Javascript), CSS3.",
    madeBy: "Made with ❤️ By DaveLee",
    add: "Add",
    warning: "Click the + button to add <br> or press enter"
  },
  "ru": {
    chooseImage: "Выбрать изображение",
    save: "Сохранить",
    timeLimit: "Лимит времени:",
    appInfo: "MyPomodoro — это приложение Pomodoro, которое поможет вам учиться и сосредоточиться, но вы можете настраивать его как хотите. Код 'noob-friendly', так как он сделан для новичков, чтобы делать форки и свои версии. В коде есть объяснения каждой части, чтобы вы могли редактировать по-своему.",
    version: "Версия: v1.0",
    stack: "Стек: HTML5, ES6 (Javascript), CSS3.",
    madeBy: "Сделано с ❤️ DaveLee",
    add: "Добавить",
    warning: "Нажмите кнопку +, чтобы добавить <br> или нажмите Enter"
  }
};

// função para trocar idioma
function setLanguage(lang) {
  document.querySelector(".file-label").firstChild.textContent = translations[lang].chooseImage;
  document.getElementById("applyBtn").textContent = translations[lang].save;
  document.querySelector("#sectTwo h2").textContent = translations[lang].timeLimit;
  document.getElementById("appInfo").textContent = translations[lang].appInfo;

  const footer = document.querySelector("footer");
  footer.children[0].textContent = translations[lang].version;
  footer.children[1].textContent = translations[lang].stack;
  footer.children[2].textContent = translations[lang].madeBy;

  document.querySelector(".user-label").textContent = translations[lang].add;
  document.getElementById("warning").innerHTML = translations[lang].warning;
}

// botões de troca de idioma
function portuguese() {
  setLanguage("pt-BR");
}
function english() {
  setLanguage("en");
}
function russian() {
  setLanguage("ru");
}
