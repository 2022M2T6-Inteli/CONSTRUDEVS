import { Router } from "express";
import { insertVaga, updateVaga, selectVagas, selectVaga, deleteVaga,joinMeiVagas} from '../Controller/crudVagas.js';


// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();


// Rotas da tabela Vagas
router.get('/vagas', selectVagas);
router.get('/vaga', selectVaga);
router.delete('/vaga', deleteVaga);
router.put('/vaga', updateVaga);
router.post('/vaga', insertVaga);


// JOIN´s 
router.get('/allMeiVagas', joinMeiVagas) // join entre os ID´s da empresa e da vaga


export default router;