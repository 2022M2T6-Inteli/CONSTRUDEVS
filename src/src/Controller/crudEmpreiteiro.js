import { bancoDados } from "../../Backend/configDB.js";

// os comandos abaixo são responsáveis pela tabela MEI

//  comando SELECT ALL da tabela MEI
export async function selectAllEmpreiteiro(req, res) {
  bancoDados().then((db) => {
    db.all("SELECT * FROM empreiteiros").then((Cadastros) =>
      res.json(Cadastros)
    );
  });
}

// comando SELECT da tabela MEI
export async function selectEmpreiteiro(req, res) {
  let id_empreiteiro = req.query.id_empreiteiro;
  bancoDados().then((db) => {
    db.get("SELECT * FROM empreiteiros WHERE id_empreiteiro=?", [
      id_empreiteiro,
    ]).then((Cadastro) => res.json(Cadastro));
  });
}

// comando create - responsável por criar a tabela MEI
export async function createEmpreiteiro() {
  bancoDados().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS empreiteiros (id_empreiteiro INTEGER PRIMARY KEY AUTOINCREMENT, nome_empresa TEXT, email_empresa TEXT, cnpj INTEGER, localidade TEXT, especialidade TEXT, representante TEXT, email_representante TEXT, senha TEXT, confirma_senha TEXT)"
    );
  });
}

// comando insert - responsável por inserir dados na tabela MEI
export async function insertEmpreiteiro(req, res) {
  let empreiteiros = req.body;
  bancoDados().then((db) => {
    db.run(
      'INSERT INTO empreiteiros (nome_empresa, email_empresa, cnpj, localidade, especialidade, representante, email_representante, senha, confirma_senha) VALUES (?,?,?,?,?,?,?,?,?)',
      [
        empreiteiros.nome_empresa,
        empreiteiros.email_empresa,
        empreiteiros.cnpj,
        empreiteiros.localidade,
        empreiteiros.especialidade,
        empreiteiros.representante,
        empreiteiros.email_representante,
        empreiteiros.senha,
        empreiteiros.confirma_senha,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

// comando update - responsável por atualizar os dados da tabela MEI
export async function updateEmpreiteiro(req, res) {
  let { id_empreiteiro, nome_empresa, email_empresa, cnpj, localidade, especialidade, representante, email_representante } = req.body;

  console.log(req.body)

  bancoDados().then((db) => {
    db.run(
      "UPDATE empreiteiros SET nome_empresa=?, email_empresa=?, cnpj=?, localidade=?, especialidade=?, representante=?, email_representante=? WHERE id_empreiteiro=?",
      [
        nome_empresa,
        email_empresa,
        cnpj,
        localidade,
        especialidade,
        representante,
        email_representante,
        id_empreiteiro,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

// comando delete - responsável por deletar dados da tabela MEI
export async function deleteEmpreiteiro(req, res) {
  let id_empreiteiro = req.body.id_empreiteiro;

  bancoDados().then((db) => {
    db.get("DELETE FROM empreiteiros WHERE id_empreiteiro=?", [
      id_empreiteiro,
    ]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}

// comando DELETE para todos os dados da tabela
export async function deleteAllEmpreiteiro(req, res) {
  bancoDados().then((db) => {
    db.get("DELETE  FROM empreiteiros").then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
