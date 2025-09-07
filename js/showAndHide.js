

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

function showInfo(){
 
    sectThree.style.display = "block";
    sectTwo.style.display = "none";
    sectOne.style.display = "none";

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


  const configBtn = document.getElementById('config-btn');
  const configSect = document.getElementById('config');

  configBtn.addEventListener('click', function() {

    if (configSect.style.display === 'none') {
      configSect.style.display = 'block'; // Mostra o conteúdo
    } else {
        configSect.style.display = 'none';  // Oculta o conteúdo
    }
  });



  // 
  // FAZER CONFIGURAÇÃO DE MOSTRAR E TIRAAR AS CONFIGURAÇÕES AQUI E TIRAR AQUELE BOTÃO DE X DE LÁ