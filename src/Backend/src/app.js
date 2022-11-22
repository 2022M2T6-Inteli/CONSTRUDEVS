import {bancoDados} from './configDB.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createVagas, createMei, createEfetivacao } from './Controller/crudTabelas.js';

// essa é o arquivo principal do backend

import express from 'express';
const app = express();
app.use(express.json());
app.use(cors()); // usado para evitar erro do cors no navegador 

// implementando o sistema de rotas
import router from './routes/routes.js'
app.use(router)

// iniciando a pasta views
app.set('view engine', 'ejs')

app.use(express.static("Frontend"))

app.get('/home', (req,res) =>{
    res.render('home')
})
// criando as tabelas 
 createVagas();
 createMei();
 createEfetivacao();

 // abrindo servidor 
app.listen(3000, ()=>console.log("api Rodando."))

