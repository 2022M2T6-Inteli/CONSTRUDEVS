import {  bancoDados } from '../../Backend/configDB.js';

// comando SELECT ALL da tabela efetivacao
export async function selectAllAdminMrv(req, res){
    bancoDados().then(db=>{
        db.all('SELECT * FROM adminMrv')
        .then(Cadastros=>res.json(Cadastros))
    })
}

// comando SELECT da tabela efetivacao 
export async function selectAdminMrv(req, res){
    let id_adminMrv= req.body.id_adminMrv;
    bancoDados().then(db=>{
        db.get('SELECT * FROM adminMrv WHERE id_adminMrv=?', [id_adminMrv])
        .then(Cadastro=>res.json(Cadastro))
    })
}

// comando DELETE para a tabela efetivacao 
export async function deleteAdminMrv(req, res){
    let id_adminMrv = req.body.id_adminMrv
    bancoDados().then(db=>{
        db.get('DELETE FROM adminMrv WHERE id_adminMrv=?', [id_adminMrv])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

// comando update - responsável por atualizar os dados da tabela efetivacao
export async function udpateAdminMrv(req, res){
    let adminMrv= req.body;
    bancoDados().then(db=>{
        db.run('UPDATE OR IGNORE adminMrv SET id_adminMrv=?, nome_admin=?,email_admin=?, senha_admin=?,confirma_senha=?', [adminMrv.id_adminMrv, adminMrv.nome_admin, adminMrv.email_admin, adminMrv.senha_admin, adminMrv.confirma_senha])
    });
    res.json({
        "statusCode": 200
    })
}


// comando insert - responsável por inserir dados na tabela efetivacao
export async function insertAdminMrv(req, res){
   let id_adminMrv = req.body;
   let nome_admin = req.body;
   let email_admin = req.body;
   let senha_admin = req.body;
   let confirma_senha = req.body;

    bancoDados().then(db=>{
        db.run('INSERT INTO adminMrv (id_adminMrv, nome_admin, email_admin, senha_admin, confirma_senha) VALUES (?,?,?,?,?)', [id_adminMrv.id_adminMrv, nome_admin.nome_admin, email_admin.email_admin,senha_admin.senha_admin,confirma_senha.confirma_senha]);
    });
    res.json({
        "statusCode":200
    })
}

// comando create - responsável por criar a tabela efetivacao
export async function createAdminMrv(){
    bancoDados().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS adminMrv (id_adminMrv INTEGER PRIMARY KEY AUTOINCREMENT, nome_admin TEXT, email_admin TEXT, senha_admin TEXT, confirma_senha TEXT) ')
    })
}


// comando DELETE para todos os dados da tabela  
export async function deleteAllAdminMrv(req, res){
    bancoDados().then(db=>{
        db.get('DELETE FROM adminMrv ')
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}
