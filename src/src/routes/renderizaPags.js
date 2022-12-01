import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

router.get("/renderizaIndexVisitante", (req, res) => {
  res.render("visitante/pagVisitante");
});


router.get("/loginAdminMrv", (req,res) =>{
  res.render("login/loginAdminMrv")
})

router.get("/loginEmpreiteiro", (req,res) =>{
  res.render("login/loginEmpreiteira")
})

router.get("/cadastrarEmpreiteiro", (req,res) =>{
  res.render("adminMrv/cadastroAdmin")
})

router.get("/cadastrarAdminMrv", (req,res) =>{
  res.render("empreiteiro/finalizaCadastro")
})


// função para sistema de login admin MRV
function selecionaAdmin(req, res) {
  fetch("http://localhost:3001/selectAllAdminMrv")
    .then((admin) => {
      return admin.json();
    })
    .then((admin) => {
      admin.forEach((analista) => {
        if (
          analista.email_admin == req.body.email &&
          analista.senha_admin == req.body.senha
        ) {
          res.render("adminMrv/pagAdmin");
        } else {
          res.render("erros/pagErros");
        }
      });
    });
}

function selecionaEmpreiteiro(req, res) {
  fetch("http://localhost:3001/selectAllEmpreiteiro")
    .then((admin) => {
      return admin.json();
    })
    .then((admin) => {
      admin.forEach((empreiteiro) => {
        if (
          empreiteiro.cnpj == req.body.cnpj &&
          empreiteiro.senha == req.body.senha
        ) {
          res.render("empreiteiro/pagEmpreiteiro");
        } else {
          res.render("erros/pagErros");
        }
      });
    });
}

router.post("/logarAdminMrv", selecionaAdmin)
router.post("/logarEmpreiteiro", selecionaEmpreiteiro)


export default router;