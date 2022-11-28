
import cors from 'cors';
import { createVagas} from '../src/Controller/crudVagas.js';
import {createEmpreiteiro} from '../src/Controller/crudEmpreiteiro.js';
import {createEfetivacao } from '../src/Controller/crudEfetivacao.js';
import { createAdminMrv } from '../src/Controller/crudAdminMrv.js';
import express from 'express';
import efetivacao from '../src/routes/efetivacao.js'
import empreiteiro from '../src/routes/empreiteiro.js'
import vagas from '../src/routes/vagas.js'
import adminMrv from '../src/routes/adminMrv.js'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import bodyParser from 'body-parser';
const urlencodedParser = bodyParser.urlencoded({ extended: false })

export default urlencodedParser;

// essa é o arquivo principal do backend

app.use(express.urlencoded({ extended: true })) // usado para pegar elementos de preenchimento do forms
app.use(express.json());
app.use(cors()); // usado para evitar erro do cors no navegador 

// implementando o sistema de rotas
app.use(efetivacao)
app.use(empreiteiro)
app.use(vagas)
app.use(adminMrv)

// iniciando a pasta views
app.set('view engine', 'ejs')

app.use(express.static("public"))

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname + "../../public/index.html"))
})

app.post("/cadastro", (req,res) =>{
    res.render("usuario", {nome:req.body.nome})
    console.log({nome:req.body.nome})
})
// criando as tabelas 
 createVagas();
 createEmpreiteiro();
 createEfetivacao();
 createAdminMrv();

 // abrindo servidor 
app.listen(3001, ()=>console.log("api Rodando."))

