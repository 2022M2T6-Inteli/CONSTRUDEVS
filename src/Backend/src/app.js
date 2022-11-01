import {bancoDados} from './configDB.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createVagas, createMei, createEfetivacao } from './Controler/Vagas.js';

// essa é o arquivo principal do backend

import express from 'express';
const app = express();
app.use(express.json());
app.use(cors()); // usado para evitar erro do cors no navegador 

// implementando o sistema de rotas
import router from './routes.js'
app.use(router)

// criando as tabelas 
 createVagas();
 createMei();
 createEfetivacao();

 // abrindo servidor 
app.listen(3000, ()=>console.log("api Rodando."))

// executando em HTTPS 
// https.createServer({
//     cert: fs.readFileSyncs("src/SSL/code.crt"),
//     key: fs.readFileSyncs("src/SSL/code.key")
// }, app).listen(3001, ()=> console.log("Rodando um https"))

