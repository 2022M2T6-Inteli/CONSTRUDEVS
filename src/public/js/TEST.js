// definindo variáveis
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");

// const axios = require('axios');

btn.addEventListener("click", async () => {
  await updateEmpreiteiros();
  
});


const updateEmpreiteiros = async () => {
  await fetch("http://localhost:3001/selectAllEmpreiteiro")
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      tbody.innerHTML = ""

      resposta.forEach(function (user) {
        console.log(user + "user");
        let linha = document.createElement("tr");
        linha.className = "linha";

        linha.innerHTML += `<td>${user.id_empreiteiro}</td>
                            <td>${user.nome_empresa}</td>
                            <td>${user.email_empresa}</td>
                            <td>${user.cnpj}</td>
                            <td>${user.localidade}</td>
                            <td>${user.especialidade}</td>
                            <td>${user.representante}</td>
                            <td>${user.email_representante}</td>
                            <td>
                              <input id ="0">                         
                              <input id ="1">                         
                              <input id ="2">                         
                              <input id ="3">                                             
                              <input id ="4">                                             
                              <input id ="5">                                             
                              <input id ="6">                                             
                              <input id ="7">  
                              <button onclick="updateE()", >click</button>                                          
                            </td>
                          `;

        tbody.appendChild(linha);
        console.log(linha);
        
      });
    });
}

async function updateE() {  

  const database = {
  
    "id_empreiteiro":"2",
    "nome_empresa":"dasdasdasd",
    "email_empresa":"dasdasldknskdajdsn",
    "cnpj":"99999999999",
    "localidade":"klmasdlmkdalmksda",
    "especialidade":"lksdamçdsaçmlçds",
    "representante":"klasdmldsakjdsjksd",
    "email_representante":"askdçasdlkçasdasdlk",


}

  await axios.put("http://localhost:3001/atualizaEmpreiteiro", database).then(async res => {
    await updateEmpreiteiros();
    
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  

} 