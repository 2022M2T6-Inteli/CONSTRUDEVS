import {openDb, bancoDados} from './configDB.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createVagas, createMei } from './Controler/Vagas.js';

import express from 'express';
const app = express();
app.use(express.json());
app.use(cors());

import router from './routes.js'
app.use(router)


 createVagas();
 createMei()

app.listen(3000, ()=>cconsole.log("api Rodando."))

https.createServer({
    cert: fs.readFileSync("src/SSL/code.crt"),
    key: fs.readFileSyncs("src/SSL/code.key")
}, app).listen(3001, ()=> console.log("Rodando um https"))

