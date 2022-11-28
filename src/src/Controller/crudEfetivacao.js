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
        db.run('UPDATE efetivacao SET id_vagas=?,id_adminMrv=?,id_empreiteiro=? WHERE id_efetivacao=?', [efetivacao.id_vagas, efetivacao.id_adminMrv, efetivacao.id_empreiteiro, efetivacao.id_efetivacao])
    });
    res.json({
        "statusCode": 200
    })
}


// comando insert - responsável por inserir dados na tabela efetivacao
export async function insertEfetivacao(req, res){
    let id_efetivacao = req.body;
    let id_empreiteiro = req.body;
    let id_vagas = req.body;
    let id_adminMrv = req.body;
    bancoDados().then(db=>{
        db.run('INSERT INTO efetivacao (id_efetivacao, id_vagas, id_adminMrv, id_empreiteiro) VALUES (?,?,?,?)', [id_efetivacao.id_efetivacao, id_empreiteiro.id_empreiteiro, id_vagas.id_vagas, id_adminMrv.id_adminMrv]);
    });
    res.json({
        "statusCode":200
    })
}

// comando create - responsável por criar a tabela efetivacao
export async function createEfetivacao(){
    bancoDados().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS efetivacao (id_efetivacao INTEGER PRIMARY KEY, id_vagas INTEGER, id_adminMrv INTEGER, id_empreiteiro INTEGER) ')
    })
}

// comando DELETE para todos os dados da tabela  
export async function deleteAllEfetivacao(req, res){
    bancoDados().then(db=>{
        db.get('DELETE FROM efetivacao ')
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}
