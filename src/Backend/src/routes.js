import { Router } from "express";
import { createVagas, createMei, insertVaga, updateVaga, selectVagas, selectVaga, deleteVaga, insertMei, updateMei, selectAllMei, selectMei, deleteMei, selectAllEfetivacao,selectEfetivacao, deleteEfetivacao, udpateEfetivacao,insertEfetivacao, joinMeiVagas} from './Controler/Vagas.js';

// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

// Rotas da tabela Vagas
router.get('/vagas', selectVagas);
router.get('/vaga', selectVaga);
router.delete('/vaga', deleteVaga);
router.put('/vaga', updateVaga);
router.post('/vaga', insertVaga);

// Rotas da tabela MEI
router.get('/allmei', selectAllMei)
router.get('/mei', selectMei)
router.delete('/mei', deleteMei)
router.put('/mei', updateMei)
router.post('/newmei', insertMei)

// Rotas da tabela Efetivação
router.get('/allEfetivacao', selectAllEfetivacao)
router.get('/efetivacao', selectEfetivacao)
router.delete('/efetivacao', deleteEfetivacao)
router.put('/efetivacao', udpateEfetivacao)
router.post('/newEfetivacao', insertEfetivacao)

// JOIN´s 
router.get('/allMeiVagas', joinMeiVagas) // join entre os ID´s da empresa e da vaga
export default router;