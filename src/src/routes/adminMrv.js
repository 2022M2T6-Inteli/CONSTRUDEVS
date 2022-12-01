import { Router } from "express";
import { insertAdminMrv, udpateAdminMrv, deleteAdminMrv, selectAdminMrv, selectAllAdminMrv, deleteAllAdminMrv } from "../Controller/crudAdminMrv.js";

const router = Router();


// implementando sistema de rotas com funções CRUD criadas no arquivo Controller

router.get('/selectAllAdminMrv', selectAllAdminMrv)
router.get('/selectAdminMrv', selectAdminMrv)
router.post('/adicionaAdminMrv', insertAdminMrv)
router.get('/deleteAdminMrv', deleteAdminMrv)
router.put('/atualizaAdminMrv', udpateAdminMrv)
router.delete('/deleteAllAdminMrv', deleteAllAdminMrv)


router.get("/renderizaIndexAdminMrv", (req, res) => {
    res.render("adminMrv/pagAdmin");
  });


router.get("/renderizaListaEmpreiteiros", (req,res) =>{
  res.render("adminMrv/listagemEmpreiteiros", 
  {

  })
})
  

  router.get("/listaEmpreiteiros", (req,res) =>{ 
    res.render("adminMrv/listaEmpreiteirosCadastrados")
  })
  
  router.get("/cadastroVaga", (req,res) =>{
    res.render("adminMrv/cadastroVaga")
  })
  
  router.get("/renderizaPerfilAdmin", (req,res) =>{
    res.render("adminMrv/perfilAdmin")
  })

export default router;