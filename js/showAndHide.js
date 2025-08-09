let configDiv = document.getElementById("config")
function showConfig(){
  configDiv.style.display = "block"
}
function closeConfig(){
  configDiv.style.display = "none"
}


let sectOne = document.getElementById("sectOne")
let sectTwo = document.getElementById("sectTwo")
let sectThree = document.getElementById("sectThree")
function showStyle(){
  
   sectOne.style.display = "block"
   sectTwo.style.display = "none"
   sectThree.style.display = "none"
}


function showTimer(){

    sectTwo.style.display = "block"
    sectOne.style.display = "none"
    sectThree.style.display = "none"
}

function showSound(){
 
    sectThree.style.display = "block"
    sectTwo.style.display = "none"
    sectOne.style.display = "none"

}






