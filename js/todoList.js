// carrega lista do localStorage
  window.onload = function() {
    let itens = JSON.parse(localStorage.getItem("todoList")) || [];
    itens.forEach(texto => adicionaItem(texto, false));
  };
      let input = document.getElementById("todoInput");

  function adicionaItem(valor = null, salvar = true) {
    document.getElementById("warning").style.display = "none"

    let list = document.getElementById("list");
    let texto = valor ?? input.value.trim();

    if (texto === "") return;

    // cria li
    let li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = `
      ${texto}
      <button class="deleteBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-trash-2">
          <path d="M10 11v6"/>
          <path d="M14 11v6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
          <path d="M3 6h18"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    `;

    li.addEventListener("click", () =>{
      li.style.textDecoration = "line-through"
    })

    // botão deletar
    li.querySelector(".deleteBtn").addEventListener("click", () => {
      li.remove();
      removeDoStorage(texto);
    });

    list.appendChild(li);

    // salva no localStorage
    if (salvar) {
      let itens = JSON.parse(localStorage.getItem("todoList")) || [];
      itens.push(texto);
      
      localStorage.setItem("todoList", JSON.stringify(itens));
    }

    input.value = "";
    input.focus();
  }

  input.addEventListener("keydown", (e) => {

  if (e.code === "NumpadEnter" ){
    adicionaItem()
  }

})




  function removeDoStorage(texto) {
    let itens = JSON.parse(localStorage.getItem("todoList")) || [];
    itens = itens.filter(item => item !== texto);
    localStorage.setItem("todoList", JSON.stringify(itens));
  }