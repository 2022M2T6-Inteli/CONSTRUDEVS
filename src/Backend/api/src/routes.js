import { Router } from "express";
import { createVagas, createMei, insertVaga, updateVaga, selectVagas, selectVaga, deleteVaga, insertMei, updateMei, selectAllMei, selectMei, deleteMei} from './Controler/Vagas.js';

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

// JOINS 



export default router;