
// função que exclui uma parte da tabela 
let tabela = document.querySelector("#tbody")

tabela.addEventListener("click",function(event){
    let elementoClicado = event.target;
    console.log("tudo ok")
    
    if (elementoClicado.classList.contains("excluirLinha")) {
        let celula = elementoClicado.parentNode;
        
        celula.remove();
        console.log("tudo ok2")


    }
})