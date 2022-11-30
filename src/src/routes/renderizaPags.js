import { Router } from "express";
import fetch from "node-fetch";

const router = Router();


router.get("/renderizaIndexVisitante", (req, res) => {
  res.render("visitante/pagVisitante");
});

router.get("/renderizaIndexEmpreiteiro", (req, res) => {
  res.render("empreiteiro/pagEmpreiteiro");
});

router.get("/renderizaIndexAdminMrv", (req, res) => {
  res.render("adminMrv/pagAdmin");
});


router.get("/finalizaCadastroEmpreiteiro", (req,res) =>{
  res.render("empreiteiro/finalizaCadastro")
})


router.get("/oportunidadesEmpreiteiro", (req,res) =>{
  res.render("empreiteiro/oportunidadesEmpreiteiro")
})

router.get("/renderizaListagemEmpreiteiros", (req,res) =>{
  res.render("adminMrv/listagemEmpreiteiros")
})

router.get("/cadastroVaga", (req,res) =>{
  res.render("adminMrv/cadastroVaga")
})

router.get("/renderizaPerfilAdmin", (req,res) =>{
  res.render
})


router.post("/loginEmpreiteiro", selecionaEmpreiteiro);

router.post("/loginAdminMrv", selecionaAdmin);

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

export default router;