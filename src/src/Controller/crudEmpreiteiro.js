import {  bancoDados } from '../../Backend/configDB.js';


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