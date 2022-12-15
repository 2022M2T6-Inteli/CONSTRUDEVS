import cookieParser from "cookie-parser";
import { response, Router } from "express";
import fetch from "node-fetch";

const router = Router();
let resposta =
  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/pgErros.css">
    <title>ERRO</title>
</head>
<body>

    <style>
        
/*definindo padrões para a página*/
*{
    margin:0;
    padding:0;
    text-align: center;
    color:white;
    list-style: none;
    text-decoration: none;
    overflow-y: hidden;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


/*estilizando a body e a main*/
body{
    height:100vh;
    background: linear-gradient(#505050, #26815c, #99b78b) no-repeat;
}

main{
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align:middle;
    margin-top: 10%;
    width: 60%;
    margin-left: 20%;
    -webkit-box-shadow: 15px 25px 5px -7px rgba(0,0,0,0.78);
    -moz-box-shadow: 15px 25px 5px -7px rgba(0,0,0,0.78);
    box-shadow: 15px 25px 5px -7px rgba(0,0,0,0.78);
    border-radius: 20px;
    border:5px solid black;
}

article{
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align:middle;
    margin-top: 10%;
    width: 60%;
    margin-left: 20%;
    -webkit-box-shadow: 15px 25px 5px -7px rgba(0,0,0,0.78);
    -moz-box-shadow: 15px 25px 5px -7px rgba(0,0,0,0.78);
    box-shadow: 15px 25px 5px -7px rgba(0,0,0,0.78);
    border-radius: 20px;
    border:5px solid black;
}

button{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 10px;
    border-radius: 20px;
    width:500px;
    height:200px;
}
    </style>
    <!--PÁGINA COM ARQUIVO PRINCIPAL IMPORTADO DA PASTA PUBLIC/HTML-->
        <main>
            <h1>Houve um erro ! não conseguimos encontrar os dados fornecidos. Volte para a página anterior e tente novamente !</h1>
            <button type = "submit"><a href = "/hub">Voltar para a página inicial</a></button>
            <button type = "submit"><a href = "/cadastrarEmpreiteiro">Cadastre-se como empreiteira aqui</a></button>
            <button type = "submit"><a href = "/cadastrarAdminMrv">Cadastre-se como administrador MRV aqui</a></button>
        </main>
</body>
</html>

`
// arquivo usado para renderizar, dinamicamente, arquivos EJS

router.get("/renderizaIndexVisitante", (req, res) => {
  res.render("visitante/pagVisitante");
});

router.get("/loginAdminMrv", (req, res) => {
  res.render("login/loginAdminMrv");
});

router.get("/loginEmpreiteiro", (req, res) => {
  res.render("login/loginEmpreiteira");
});

router.get("/cadastrarEmpreiteiro", (req, res) => {
  res.render("empreiteiro/cadastroEmpreiteiro");
});

router.get("/cadastrarAdminMrv", (req, res) => {
  res.render("adminMrv/cadastroAdmin");
});

router.get("/cadastroFeito", (req,res) =>{
  res.render("cadastroEfetuado/cadastroOk")
})




// função para sistema de login admin MRV
function selecionaAdmin(req, res) {
  for (let cookie of Object.keys(req.cookies)) {
      res.clearCookie(cookie)
  }
  fetch("http://localhost:3001/selectAllAdminMrv")
  .then((admin) => {
    return admin.json();
    })
    .then((admin) => {
      admin.forEach((analista) => {
        if (analista.email_admin == req.body.email && analista.senha_admin == req.body.senha  ) {
          res.cookie("Id_adm", analista.id_empreiteiro);
          res.render("adminMrv/pagAdmin");
        } 
      });
    });
}

router.post("/logarAdminMrv", selecionaAdmin);

router.get("/logarAdminMrv", (req,res) =>{
      if(valores[0] && valores[1]){
        res.render("adminMrv/pagAdmin");
      }
      res.render("erros/pagErros")
    })


function selecionaEmpreiteiro(req,res) {
  for (let cookie of Object.keys(req.cookies)) {
    res.clearCookie(cookie)
}
  fetch("http://localhost:3001/selectAllEmpreiteiro")
    .then((user) => {
      return user.json();
    })
    .then((user) => {
      user.forEach((empreiteiro) => {
        let valores = [];
          if (empreiteiro.cnpj == req.body.cnpj && empreiteiro.senha == req.body.senha) {
            valores[0] = empreiteiro.cnpj;
            valores[1] = empreiteiro.senha; 
            res.cookie("id_User", empreiteiro.id_empreiteiro);
            res.render("empreiteiro/pagEmpreiteiro")
          } 
          return valores;
      });
    });
}
router.post("/logarEmpreiteiro",selecionaEmpreiteiro);

router.get("/logarEmpreiteiro", (req,res) =>{
  if(valores[0] && valores[1]){
    res.render("empreiteiro/pagEmpreiteiro");
  }
  res.render("erros/pagErros")
}) 

// router.get("/logarAdminMrv", (req,res) =>{
//   res.render("adminMrv/pagAdmin");
// })


// router.get("/logarEmpreiteiro", (req,res) =>{

//   if( req.session.cnpj && req.session.senha){
//     res.render("empreiteiro/pagEmpreiteiro");
//   } else {
//     res.render("erros/pagErros");
//   }
// })


export default router
