const express = require('express')
const inicio = express.Router()


inicio.post('/',async function(req,res){  
    
    const body = req.body.dados
    console.log(body)

    if(body.login == "user" && body.senha == "1234")

        res.json({"resposta":true ,"token":process.env.TOKEN_GLOBAL})

    else
        res.json({"resposta":false})
   
})
   

module.exports =  inicio
