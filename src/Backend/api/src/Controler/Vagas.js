import { openDb, bancoDados } from '../configDB.js';


export async function selectVagas(req, res){
    openDb().then(db=>{
       db.all('SELECT * FROM Vagas')
        .then(Vagas=>res.json(Vagas))
    });
}

export async function selectVaga(req, res){
    let id_vagas = req.body.id_vagas;
     openDb().then(db=>{
        db.get('SELECT * FROM Vagas WHERE id_vagas=?', [id_vagas])
        .then(Vaga=>res.json(Vaga))
    });
}

export async function createVagas(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Vagas (id_vagas INTEGER PRIMARY KEY, regiao TEXT, area_de_atuacao TEXT, telefone INTEGER)')
    })
}

export async function insertVaga(req, res){
    let vagas = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Vagas (regiao, area_de_atuacao, telefone) VALUES (?,?,?)',[vagas.regiao, vagas.area_de_atuacao, vagas.telefone]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateVaga(req, res){
    let vagas = req.body;
    openDb().then(db=>{
        db.run('UPDATE Vagas SET regiao=?, area_de_atuacao=?, telefone=? WHERE id_vagas=?',[vagas.regiao, vagas.area_de_atuacao, vagas.telefone, vagas.id_vagas]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteVaga(req, res){
    let id_vagas = req.body.id_vagas    
    openDb().then(db=>{
        db.get('DELETE FROM Vagas WHERE id_vagas=?', [id_vagas])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

export async function selectAllMei(req, res){
    bancoDados().then(db=>{
        db.all('SELECT * FROM Tabela_Mei')
        .then(Cadastros=>res.json(Cadastros))
    })
}

export async function selectMei(req, res){
    let id_mei = req.body.id_mei;
    bancoDados().then(db=>{
        db.get('SELECT * FROM Tabela_Mei WHERE id_mei=?', [id_mei])
        .then(Cadastro=>res.json(Cadastro))
    })
}

export async function createMei(){
    bancoDados().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Tabela_Mei (id_mei INTEGER PRIMARY KEY, razaoSocial TEXT, cnpj INTEGER, telefone INTEGER, email TEXT, regiao TEXT, principaisAreas TEXT, numeroColaboradores INTEGER)')
    })
}

export async function insertMei(req, res){
    let Tabela_Mei = req.body;
    bancoDados().then(db=>{
        db.run('INSERT INTO Tabela_Mei (razaoSocial, cnpj, telefone, email, regiao, principaisAreas, numeroColaboradores) VALUES (?,?,?,?,?,?,?)', [Tabela_Mei.razaoSocial, Tabela_Mei.cnpj, Tabela_Mei.telefone, Tabela_Mei.email, Tabela_Mei.regiao, Tabela_Mei.principaisAreas, Tabela_Mei.numeroColaboradores]);
    });
    res.json({
        "statusCode":200
    })
}

export async function updateMei(req, res){
    let Tabela_Mei = req.body;
    bancoDados().then(db=>{
        db.run('UPDATE Tabela_Mei SET razaoSocial=?, cnpj=?, telefone=?, email=?, regiao=?, principaisAreas=?, numeroColaboradores=? WHERE id_mei=?', [Tabela_Mei.razaoSocial, Tabela_Mei.cnpj, Tabela_Mei.telefone, Tabela_Mei.email, Tabela_Mei.regiao, Tabela_Mei.principaisAreas, Tabela_Mei.numeroColaboradores, Tabela_Mei.id_mei])
    });
    res.json({
        "statusCode": 200
    })
}

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
