import { Router } from "express";
import {selectAllEfetivacao,selectEfetivacao, deleteEfetivacao, udpateEfetivacao,insertEfetivacao, deleteAllEfetivacao} from '../Controller/crudEfetivacao.js';


// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();


// Rotas da tabela Efetivação
router.get('/selectAllEfetivacao', selectAllEfetivacao)
router.get('/selectEfetivacao', selectEfetivacao)
router.delete('/deleteEfetivacao', deleteEfetivacao)
router.put('/atualizaEfetivacao', udpateEfetivacao)
router.post('/adicionaEfetivacao', insertEfetivacao)
router.delete('/deleteAllEfetivacao', deleteAllEfetivacao)

export default router;