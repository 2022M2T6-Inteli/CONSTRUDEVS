// definindo variáveis
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");

// btn.addEventListener("click", async () => {
//   await renderEmpreiteiros();
// });

// função para alterar elementos 


// função para deletar e exibir dinamicamente 
const renderEmpreiteiros = async () => {
  await fetch("http://localhost:3001/selectAllvagas")
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      tbody.innerHTML = "";

      resposta.forEach(function (user) {
        console.log(user + "user");
        let linha = document.createElement("tr");
        linha.className = "linha";

        linha.innerHTML += `<td>
                              <input type="text" id="nomeEmpresa${user.id_vagas}" value="${user.regiao}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="emailEmpresa${user.id_vagas}" value="${user.area_de_atuacao}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="cnpj${user.id_vagas}" value="${user.telefone}" disabled="true" />
                            </td>
                            <td>
                              <button class="update" id="update${user.id_vagas}" onclick="toggleInputs(${user.id_vagas});">
                                <a>Candidatar
                              </button>`;

        tbody.appendChild(linha);
        console.log(linha);
      });
    });
};


if (window) {
  window.addEventListener("load", () => {
    renderEmpreiteiros();
  });
}


