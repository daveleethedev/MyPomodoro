let configDiv = document.getElementById("config");

function showConfig(){
  configDiv.style.display = "block";
}
function closeConfig(){
  configDiv.style.display = "none";
}

let sectOne = document.getElementById("sectOne");
let sectTwo = document.getElementById("sectTwo");
let sectThree = document.getElementById("sectThree");

function showStyle(){
   sectOne.style.display = "block";
   sectTwo.style.display = "none";
   sectThree.style.display = "none";
}


function showTimer(){
    sectTwo.style.display = "block";
    sectOne.style.display = "none";
    sectThree.style.display = "none";
}

function showSound(){
 
    sectThree.style.display = "block";
    sectTwo.style.display = "none";
    sectOne.style.display = "none";

}

let showPainelBtn = document.getElementById("showPainel");
let closePainelBtn = document.getElementById("closePainel");
let painel = document.getElementById("painel");

function showPainel(){
      painel.style.display = "block";
      showPainelBtn.style.display = "none";
      closePainelBtn.style.display = "block"   ;
}

function closePainel(){
      painel.style.display = "none";
      showPainelBtn.style.display = "block";
      closePainelBtn.style.display = "none";
}


 const langOptionsBtn = document.getElementById('translate_btn');
  const langOptions = document.querySelector('.langChooseSection');

  langOptionsBtn.addEventListener('click', function() {

    if (langOptions.style.display === 'none') {
      langOptions.style.display = 'block'; // Mostra o conteúdo
    } else {
      langOptions.style.display = 'none';  // Oculta o conteúdo
    }
  });


  // 
  // FAZER CONFIGURAÇÃO DE MOSTRAR E TIRAAR AS CONFIGURAÇÕES AQUI E TIRAR AQUELE BOTÃO DE X DE LÁ