import { get } from 'https';
import { isBuffer } from 'util';
import {  bancoDados } from '../configDB.js';

// os comandos abaixo são responsáveis por fazer o CRUD da tabela vagas

// comando SELECT ALL da tabela vagas 
export async function selectVagas(req, res){
    bancoDados().then(db=>{
       db.all('SELECT * FROM Vagas')
        .then(Vagas=>res.json(Vagas))
    });
}

// comando SELECT da tabela vagas
export async function selectVaga(req, res){
    let id_vagas = req.body.id_vagas;
    bancoDados().then(db=>{
        db.get('SELECT * FROM Vagas WHERE id_vagas=?', [id_vagas])
        .then(Vaga=>res.json(Vaga))
    });
}
// Comando create - criar a tabela vagas
export async function createVagas(){
    bancoDados().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Vagas (id_vagas INTEGER PRIMARY KEY, regiao TEXT, area_de_atuacao TEXT, telefone INTEGER)')
    })
}

// comando insert - responsável por inserir dados na tabela vagas
export async function insertVaga(req, res){
    let vagas = req.body;
    bancoDados().then(db=>{
        db.run('INSERT INTO Vagas (regiao, area_de_atuacao, telefone) VALUES (?,?,?)',[vagas.regiao, vagas.area_de_atuacao, vagas.telefone]);
    });
    res.json({
        "statusCode": 200
    })
}

// comando update - responsável por atualizar a tabela vagas
export async function updateVaga(req, res){
    let vagas = req.body;
    bancoDados().then(db=>{
        db.run('UPDATE Vagas SET regiao=?, area_de_atuacao=?, telefone=? WHERE id_vagas=?',[vagas.regiao, vagas.area_de_atuacao, vagas.telefone, vagas.id_vagas]);
    });
    res.json({
        "statusCode": 200
    })
}

// comando delete - responsável por deletar elementos da tabela vagas
export async function deleteVaga(req, res){
    let id_vagas = req.body.id_vagas    
    bancoDados().then(db=>{
        db.get('DELETE FROM Vagas WHERE id_vagas=?', [id_vagas])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

// os comandos abaixo são responsáveis pela tabela MEI

//  comando SELECT ALL da tabela MEI 
export async function selectAllMei(req, res){
    bancoDados().then(db=>{
        db.all('SELECT * FROM Tabela_Mei')
        .then(Cadastros=>res.json(Cadastros))
    })
}

// comando SELECT da tabela MEI 
export async function selectMei(req, res){
    let id_mei = req.body.id_mei;
    bancoDados().then(db=>{
        db.get('SELECT * FROM Tabela_Mei WHERE id_mei=?', [id_mei])
        .then(Cadastro=>res.json(Cadastro))
    })
}

// comando create - responsável por criar a tabela MEI 
export async function createMei(){
    bancoDados().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Tabela_Mei (id_mei INTEGER PRIMARY KEY, razaoSocial TEXT, cnpj INTEGER, telefone INTEGER, email TEXT, regiao_empresa TEXT, principaisAreas TEXT, numeroColaboradores INTEGER)')
    })
}

// comando insert - responsável por inserir dados na tabela MEI
export async function insertMei(req, res){
    let Tabela_Mei = req.body;
    bancoDados().then(db=>{
        db.run('INSERT INTO Tabela_Mei (razaoSocial, cnpj, telefone, email, regiao_empresa, principaisAreas, numeroColaboradores) VALUES (?,?,?,?,?,?,?)', [Tabela_Mei.razaoSocial, Tabela_Mei.cnpj, Tabela_Mei.telefone, Tabela_Mei.email, Tabela_Mei.regiao, Tabela_Mei.principaisAreas, Tabela_Mei.numeroColaboradores]);
    });
    res.json({
        "statusCode":200
    })
}

// comando update - responsável por atualizar os dados da tabela MEI 
export async function updateMei(req, res){
    let Tabela_Mei = req.body;
    bancoDados().then(db=>{
        db.run('UPDATE Tabela_Mei SET razaoSocial=?, cnpj=?, telefone=?, email=?, regiao_empresa=?, principaisAreas=?, numeroColaboradores=? WHERE id_mei=?', [Tabela_Mei.razaoSocial, Tabela_Mei.cnpj, Tabela_Mei.telefone, Tabela_Mei.email, Tabela_Mei.regiao, Tabela_Mei.principaisAreas, Tabela_Mei.numeroColaboradores, Tabela_Mei.id_mei])
    });
    res.json({
        "statusCode": 200
    })
}

// comando delete - responsável por deletar dados da tabela MEI 
export async function deleteMei(req, res){
    let id_mei = req.body.id_mei
    bancoDados().then(db=>{
        db.get('DELETE FROM Tabela_Mei WHERE id_mei=?', [id_mei])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

// JOIN entre as tabelas MEI e Vagas (junta as regiões da tabela MEI com as regiões da tabela Vagas)
export async function joinMeiVagas (req, res){
    let idVagas = req.body.id_mei;
    let idMei = req.body.id_vagas;
    bancoDados().then(db =>{
         db.all("SELECT * FROM Tabela_Mei INNER JOIN Vagas ON Tabela_Mei.id_mei = Vagas.id_vagas", [idMei, idVagas]).then(Cadastro=>res.json(Cadastro))
         
    })
}

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
