import { Router } from "express";
import {selectAllEmpreiteiro, selectEmpreiteiro, insertEmpreiteiro, updateEmpreiteiro, deleteEmpreiteiro, deleteAllEmpreiteiro} from '../Controller/crudEmpreiteiro.js';

// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();

// Rotas da tabela MEI
router.get('/selectAllEmpreiteiro', selectAllEmpreiteiro)
router.get('/selectEmpreiteiro', selectEmpreiteiro)
router.delete('/deleteEmpreiteiro', deleteEmpreiteiro)
router.put('/atualizaEmpreiteiro', updateEmpreiteiro)
router.post('/adicionaEmpreiteiro', insertEmpreiteiro)
router.delete('/deleteAllEmpreiteiros', deleteAllEmpreiteiro)

export default router;