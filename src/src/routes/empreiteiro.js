import { Router } from "express";
import {selectAllEmpreiteiro, selectEmpreiteiro, insertEmpreiteiro, updateEmpreiteiro, deleteEmpreiteiro, deleteAllEmpreiteiro} from '../Controller/crudEmpreiteiro.js';

// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();

// Rotas da tabela empreiteiro
router.get('/selectAllEmpreiteiro', selectAllEmpreiteiro)
router.get('/selectEmpreiteiro', selectEmpreiteiro)
router.delete('/deleteEmpreiteiro', deleteEmpreiteiro)
router.put('/atualizaEmpreiteiro', updateEmpreiteiro)
router.post('/adicionaEmpreiteiro', insertEmpreiteiro)
router.delete('/deleteAllEmpreiteiros', deleteAllEmpreiteiro)

  router.get("/renderizaIndexEmpreiteiro", (req, res) => {
    res.render("empreiteiro/pagEmpreiteirov2"); // trocado por pagEmpreitero
  });

  router.get("/finalizaCadastroEmpreiteiro", (req,res) =>{
    res.render("empreiteiro/cadastroEmpreiteiro")
  })

  router.get("/oportunidadesEmpreiteiro", (req,res) =>{
    res.render("empreiteiro/oportunidadesEmpreiteiro")
  })

  router.get("/renderizaPerfilEmpreiteiro", (req,res) =>{
    res.render("empreiteiro/perfil");
  })
  
export default router;