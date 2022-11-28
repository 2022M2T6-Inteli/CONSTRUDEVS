// definindo variáveis
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");

btn.addEventListener("click", () => {
  fetch("http://localhost:3001/selectAllEmpreiteiro")
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      resposta.forEach(function (user) {
        console.log(user);
        let linha = document.createElement("tr");
        linha.className = "linha";

        linha.innerHTML += `<td>${user.id_empreiteiro}</td>
                            <td>${user.nome_empresa}</td>
                            <td>${user.email_empresa}</td>
                            <td>${user.cnpj}</td>
                            <td>${user.localidade}</td>
                            <td>${user.especialidade}</td>
                            <td>${user.representante}</td>
                            <td>${user.email_representante}</td>`;

        tbody.appendChild(linha);
        console.log(linha);
      });
    });
});
