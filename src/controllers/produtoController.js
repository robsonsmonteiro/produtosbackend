const { json } = require('express');
const mongoose = require('mongoose');
const produto = mongoose.model('Produto');

module.exports ={
async cadastrarProduto (req,res){
    const payload = req.body;
    const response = await produto.create(payload); //Esperar resposta
    res.json(response);
}, 
async listarProdutos   (req,res){ //Mongoose exige que seja assincrono
    const page = req.query.page;
    //const {page} = //Variavel com o mesmo nome do parametro
    const response = await produto.paginate({},{page}); //Utilizar await por ser assincrono //Pode utilizar uma query
    res.json(response);
},
async listarPeloCodigo (req,res){
 //   const codigoProduto = req.params.codigoProduto; //Params recebe o código pela URL
    const response = await produto.findById(req.params.codigoProduto); //FindByID encontra pelo ID
    res.json(response);

},
async atualizarProduto (req,res){
    const codigoProduto = req.params.codigoProduto;
    const produtoAtualizado =  req.body;
    const response = await produto.findByIdAndUpdate(codigoProduto,produtoAtualizado,{new: true});
    res.json(response);
},
async removerProduto   (req,res){
    const codigoProduto = req.params.codigoProduto;
    const response = await produto.findByIdAndRemove(codigoProduto);
    res.json(response);

},
async listarPeloNome   (req,res){
       const nomeProduto = req.params.nomeProduto; //Params recebe o código pela URL
       const response = await produto.find({"descricao": nomeProduto}); //FIND retorna a lista
       res.json(response);
/* // Condicional
        
                if (response == null) {         // Null devido a função "findOne", Caso fosse "find", a condicional seria == "".
                    res.json("Produto não encontrado");
                } else {
                    res.json(response);
                }
        */
   }
        
   
}
    /*async listarPeloNome   (req,res){
       const nomeProduto = req.params.nomeProduto; //Params recebe o código pela URL
       const response = await produto.find({"descricao": nomeProduto}); //FIND retorna a lista
       res.json(response);
   
}*/



/*res.json({
//    "codigo": "id_001",
//    "descricao": "guitarra Gibson SG 1958",
//    "peso": "5Kg",
//    "imagem": "http://images/produtos/guitarra.jpg",
//    "fabricante": "Gibson USA",
//    "quantidade": 5,
//   "preco": 27.000
)}*/
