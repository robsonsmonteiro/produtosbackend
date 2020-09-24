const express = require ('express'); //Classe Express.
const server = express(); //Instancia da Classe Express.
const dotenv = require ('dotenv').config(); //Requisição das configurações do DOTENV.
const mongoose = require ('mongoose');
const requireDir = require('require-dir');
const cors = require('cors'); //Para o FRONTEND.

//Configurações
server.use(express.json()); //Express responde em formato de JSON.
server.use(cors()); //Para FRONTEND.

// Banco de dados
mongoose.connect(process.env.MONGODB,{useNewUrlParser: true, useUnifiedTopology: true});

//Models
//require('./src/models/produtoModels')
requireDir('./src/models');

//Requisição das Rotas criadas
server.use(require('./src/routes'));


//Configuração da Porta de acordo com o arquivo ".ENV"
server.listen(process.env.PORT || 3002)   //server.listen(3002);
console.log(`Servidor Rodando na porta ${process.env.PORT}`);