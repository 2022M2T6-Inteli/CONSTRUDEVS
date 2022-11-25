
import {  bancoDados } from '../../Backend/configDB.js';
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

// JOIN entre as tabelas MEI e Vagas (junta as regiões da tabela MEI com as regiões da tabela Vagas)
export async function joinMeiVagas (req, res){
    let idVagas = req.body.id_mei;
    let idMei = req.body.id_vagas;
    bancoDados().then(db =>{
         db.all("SELECT * FROM Tabela_Mei INNER JOIN Vagas ON Tabela_Mei.id_mei = Vagas.id_vagas", [idMei, idVagas]).then(Cadastro=>res.json(Cadastro))
         
    })
}

