import { Router } from "express";
import { insertAdminMrv, udpateAdminMrv, deleteAdminMrv, selectAdminMrv, selectAllAdminMrv, deleteAllAdminMrv } from "../Controller/crudAdminMrv.js";

const router = Router();

router.get('/selectAllAdminMrv', selectAllAdminMrv)
router.get('/selectAdminMrv', selectAdminMrv)
router.post('/adicionaAdminMrv', insertAdminMrv)
router.get('/deleteAdminMrv', deleteAdminMrv)
router.put('/atualizaAdminMrv', udpateAdminMrv)
router.delete('/deleteAllAdminMrv', deleteAllAdminMrv)


router.get("/renderizaIndexAdminMrv", (req, res) => {
    res.render("adminMrv/pagAdmin");
  });
  
  
  router.get("/renderizaListagemEmpreiteiros", (req,res) =>{
    res.render("adminMrv/listagemEmpreiteiros")
  })
  
  router.get("/cadastroVaga", (req,res) =>{
    res.render("adminMrv/cadastroVaga")
  })
  
  router.get("/renderizaPerfilAdmin", (req,res) =>{
    res.render
  })

export default router;