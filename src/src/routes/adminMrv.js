import {Router} from "express";
import { insertAdminMrv, udpateAdminMrv, deleteAdminMrv, selectAdminMrv, selectAllAdminMrv, deleteAllAdminMrv } from "../Controller/crudAdminMrv.js";

const router = Router();

router.get('/selectAllAdminMrv', selectAllAdminMrv)
router.get('/selectAdminMrv', selectAdminMrv)
router.post('/adicionaAdminMrv',insertAdminMrv )
router.delete('/deleteAdminMrv', deleteAdminMrv)
router.put('/atualizaAdminMrv', udpateAdminMrv)
router.delete('/deleteAllAdminMrv', deleteAllAdminMrv)

export default router;