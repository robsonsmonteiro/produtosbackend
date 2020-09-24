const express = require ('express');  //Importar para outras pastas do projeto
const routes = express.Router(); //routes é uma instancia da classe express
const produtoController = require('./controllers/produtoController');
const usuarioController = require('./controllers/usuarioController');

//Chamada da Lista de Produtos
routes.get('/produtos',produtoController.listarProdutos);
routes.post('/produtos', produtoController.cadastrarProduto);
routes.get('/produtos_id/:codigoProduto', produtoController.listarPeloCodigo);
routes.get('/produtos_nome/:nomeProduto', produtoController.listarPeloNome);
routes.post('/produtos_id/:codigoProduto', produtoController.atualizarProduto); 
routes.delete('/produtos_id/:codigoProduto', produtoController.removerProduto);



// Chamada da Lista de Usuario
routes.get('/usuarios',usuarioController.listarUsuarios); 
routes.post('/usuario',usuarioController.criarUsuario); 
routes.post('/autentica',usuarioController.autenticarUsuario);
routes.delete('/deleta/:removeEmail', usuarioController.removerUsuario);
 

module.exports = routes;   //Exportar routes
