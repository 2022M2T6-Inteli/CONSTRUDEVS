import {  bancoDados } from '../../Backend/configDB.js';

// comando SELECT ALL da tabela efetivacao
export async function selectAllEfetivacao(req, res){
    bancoDados().then(db=>{
        db.all('SELECT * FROM efetivacao')
        .then(Cadastros=>res.json(Cadastros))
    })
}

// comando SELECT da tabela efetivacao 
export async function selectEfetivacao(req, res){
    let id_efetivacao = req.body.id_efetivacao;
    bancoDados().then(db=>{
        db.get('SELECT * FROM efetivacao WHERE id_efetivacao=?', [id_efetivacao])
        .then(Cadastro=>res.json(Cadastro))
    })
}

// comando DELETE para a tabela efetivacao 
export async function deleteEfetivacao(req, res){
    let id_efetivacao = req.body.id_efetivacao
    bancoDados().then(db=>{
        db.get('DELETE FROM efetivacao WHERE id_efetivacao=?', [id_efetivacao])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

// comando update - responsável por atualizar os dados da tabela efetivacao
export async function udpateEfetivacao(req, res){
    let efetivacao= req.body;
    bancoDados().then(db=>{
        db.run('UPDATE OR IGNORE efetivacao SET id_efetivacao=?, id_vagas=?,id_mei =?', [efetivacao.id_efetivacao, efetivacao.id_vagas, efetivacao.id_mei])
    });
    res.json({
        "statusCode": 200
    })
}


// comando insert - responsável por inserir dados na tabela efetivacao
export async function insertEfetivacao(req, res){
    let id_efetivacao = req.body;
    let id_mei = req.body;
    let id_vagas = req.body;
    bancoDados().then(db=>{
        db.run('INSERT INTO efetivacao (id_efetivacao, id_vagas, id_mei) VALUES (?,?,?)', [id_efetivacao.id_efetivacao, id_mei.id_mei, id_vagas.id_vagas]);
    });
    res.json({
        "statusCode":200
    })
}

// comando create - responsável por criar a tabela efetivacao
export async function createEfetivacao(){
    bancoDados().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS efetivacao (id_efetivacao INTEGER PRIMARY KEY, id_vagas INTEGER,  id_mei INTEGER) ')
    })
}
