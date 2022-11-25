import { Router } from "express";
import { insertVaga, updateVaga, selectVagas, selectVaga, deleteVaga,joinEmpreiteiroVaga, deleteAllVagas} from '../Controller/crudVagas.js';


// esse arquivo foi criado para melhorar a perfomance da aplicação, por meio de um sistema de rotas dinâmicos com as operações de cada CRUD e os respectivos JOIN´s.

const router = Router();


// Rotas da tabela Vagas
router.get('/selectAllVagas', selectVagas);
router.get('/selectVaga', selectVaga);
router.delete('/deleteVaga', deleteVaga);
router.put('/atualizaVaga', updateVaga);
router.post('/insereVaga', insertVaga);
router.delete('/deleteAllVagas', deleteAllVagas)

// JOIN´s 
router.get('/joinEmpreiteiroVaga', joinEmpreiteiroVaga) // join entre os ID´s da empresa e da vaga


export default router;