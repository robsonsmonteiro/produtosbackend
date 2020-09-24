const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');


module.exports = {
async criarUsuario      (req,res){
 //const payload = req.body; 
 //const response = await Usuario.create(payload);
    const {email, senha, nome,cargo} = req.body;
    const response = await Usuario.create({email,senha,nome,cargo});
    res.json(response);
},
async autenticarUsuario (req,res){
    const {email,senha} = req.body;
    const usuarioBD = await Usuario.find({email,senha});
     res.json (usuarioBD);
   /* if (usuarioBD == "") {
        res.json("Usuário não existe!");
    } else {
        res.json(`Usuario encontrado  ${email} ${senha}`);
    };*/
    
},
async listarUsuarios    (req,res){ 
    const response = await Usuario.find(req.query.Usuario); 
    res.json(response);


},

async removerUsuario   (req,res){
    const removeEmail = req.params.removeEmail; 
    const response = await Usuario.findOneAndRemove({"email": removeEmail}); 
    res.json(response);

//Condicional para informar usuário não encontrado
  /* if (response == null){
res.json("Usuário não encontrado!");
   }else{
       res.json(`O seguinte usuario foi deletado:  ${removeEmail}`);
   }
*/

}

}

