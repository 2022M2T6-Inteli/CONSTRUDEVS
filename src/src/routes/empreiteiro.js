import { Router } from "express";
import { insertMei, updateMei, selectAllMei, selectMei, deleteMei} from '../Controller/crudEmpreiteiro.js';

// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();

// Rotas da tabela MEI
router.get('/allmei', selectAllMei,)
router.get('/mei', selectMei)
router.delete('/mei', deleteMei)
router.put('/mei', updateMei)
router.post('/newmei', insertMei)


export default router;