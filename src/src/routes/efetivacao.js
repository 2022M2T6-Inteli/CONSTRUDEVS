import { Router } from "express";
import {selectAllEfetivacao,selectEfetivacao, deleteEfetivacao, udpateEfetivacao,insertEfetivacao} from '../Controller/crudEfetivacao.js';


// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();


// Rotas da tabela Efetivação
router.get('/allEfetivacao', selectAllEfetivacao)
router.get('/efetivacao', selectEfetivacao)
router.delete('/efetivacao', deleteEfetivacao)
router.put('/efetivacao', udpateEfetivacao)
router.post('/newEfetivacao', insertEfetivacao)


export default router;