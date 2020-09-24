const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = mongoose.Schema({     // Chamando o método
descricao: String, 
peso : Number,
unidade :{
    type: String,
    require: false
},
imagem :{
    type: String
},
fabricante : String,
quantidade: Number,
preco: Number
},
{timestamps: true});
ProdutoSchema.plugin(mongoosePaginate); //Incluindo paginação na recuperação de registros
mongoose.model('Produto', ProdutoSchema); //Modelo de Dado