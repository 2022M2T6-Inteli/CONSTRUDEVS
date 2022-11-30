// definindo variáveis
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");

// const axios = require('axios');

btn.addEventListener("click", async () => {
  await renderEmpreiteiros();
  
});


const renderEmpreiteiros = async () => {
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
                              <button onclick="deleteUser(${user.   id_empreiteiro})">
                                Delete
                              </button>
                            </td>
                          `;

        tbody.appendChild(linha);
        console.log(linha);
        
      });
    });
}

async function deleteUser(id) {

  await axios.delete("http://localhost:3001/deleteEmpreiteiro", {
    data: { id_empreiteiro: id }
  }).then(async res => {
    await renderEmpreiteiros();
    
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  

} 