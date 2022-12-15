const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const nodemon=require('nodemon');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let photo=models.Photo;
let match=models.Match;

//login
app.post('/Signin',async (req,res)=>{
   let response=await user.findOne({
       where:{email:req.body.email, password: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

//criação do usuário
app.post('/create',async (req,res)=>{
    await user.create ({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email
    });
    res.send(JSON.stringify('Usuário criado com sucesso!'));
});

app.post('/update',async (req,res)=>{
    let response=await user.findOne({
        where:{email:req.body.email, password: req.body.senhaAntiga}
    });
    if(response === null){
        res.send(JSON.stringify('Senha antiga não confere'));
    }else{
        if(req.body.novaSenha === req.body.confNovaSenha){
            response.password=req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
        }else{
            res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
        }
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});