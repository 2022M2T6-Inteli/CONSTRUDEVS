// definindo variáveis
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody");

// btn.addEventListener("click", async () => {
//   await renderEmpreiteiros();
// });

const toggleInputs = async (number) => {
  let ids = [
    "nomeEmpresa",
    "emailEmpresa",
    "cnpj",
    "localidade",
    "especialidade",
    "representante",
    "email_representante",
  ];
  let buttonText = document.getElementById(`update${number}`);
  let inputs = ids.map((id) => document.getElementById(`${id}${number}`));

  console.log(inputs[1].disabled);

  if (buttonText.innerHTML === "Habilitar edicao") {
    inputs.map((input) => (input.disabled = false));
    buttonText.innerHTML = "Salvar";
  } else {
    await updateUser(number, {
      nome_empresa: inputs[0].value,
      email_empresa: inputs[1].value,
      cnpj: inputs[2].value,
      localidade: inputs[3].value,
      especialidade: inputs[4].value,
      representante: inputs[5].value,
      email_representante: inputs[6].value,
    })
      .then((res) => {
        console.log(res);
        buttonText.innerHTML = "Carregando...";
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        buttonText.innerHTML = "Habilitar edicao";
      });

    inputs.map((input) => (input.disabled = true));
  }
};

const renderEmpreiteiros = async () => {
  await fetch("http://localhost:3001/selectAllEmpreiteiro")
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      tbody.innerHTML = "";

      resposta.forEach(function (user) {
        console.log(user + "user");
        let linha = document.createElement("tr");
        linha.className = "linha";

        linha.innerHTML += `<td>${user.id_empreiteiro}</td>
                            <td>
                              <input type="text" id="nomeEmpresa${user.id_empreiteiro}" value="${user.nome_empresa}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="emailEmpresa${user.id_empreiteiro}" value="${user.email_empresa}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="cnpj${user.id_empreiteiro}" value="${user.cnpj}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="localidade${user.id_empreiteiro}" value="${user.localidade}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="especialidade${user.id_empreiteiro}" value="${user.especialidade}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="representante${user.id_empreiteiro}" value="${user.representante}" disabled="true" />
                            </td>
                            <td>
                              <input type="text" id="email_representante${user.id_empreiteiro}" value="${user.email_representante}" disabled="true" />
                            </td>

                            <td>
                              <button id="update${user.id_empreiteiro}" onclick="toggleInputs(${user.id_empreiteiro});">Habilitar edicao</button>
                            </td>
                            <td>
                              <button onclick="deleteUser(${user.id_empreiteiro})">
                                Delete
                              </button>
                            </td>`;

        tbody.appendChild(linha);
        console.log(linha);
      });
    });
};

async function deleteUser(id) {
  await axios
    .delete("http://localhost:3001/deleteEmpreiteiro", {
      data: { id_empreiteiro: id },
    })
    .then(async (res) => {
      await renderEmpreiteiros();

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function updateUser(
  id,
  {
    nome_empresa,
    email_empresa,
    cnpj,
    localidade,
    especialidade,
    representante,
    email_representante,
  }
) {
  try {
    await axios
      .put("http://localhost:3001/atualizaEmpreiteiro", {
        id_empreiteiro: id,
        nome_empresa,
        email_empresa,
        cnpj,
        localidade,
        especialidade,
        representante,
        email_representante,
      })
      .then(async (res) => {
        console.log(res);
        await renderEmpreiteiros();
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.error(error);
  }
}

if (window) {
  window.addEventListener("load", () => {
    renderEmpreiteiros();
  });
}
