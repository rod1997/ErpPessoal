const express = require('express')
const autentificador = express.Router()
require('dotenv/config');
//const controllerAutentificador = require('./autentificacao-controller.js')

function autentificadorMiddleware(req,res,next){

    const header = req.headers

    if(header.token){

        const token = process.env.TOKEN_GLOBAL

        if(header.token == token && header.auth == 'true')
            res.json({ 'resposta' : true})
        else if(header.auth == 'true')
            res.json({ 'resposta' : false})

        else if(header.token == token && !header.auth)
            next()

        else
            res.status(400).json({ 'resposta' : "nao autorizado"})    
           
    }else{
        res.status(400).json({ 'resposta' : "nao autorizado"})    
    } 
}
module.exports = autentificadorMiddleware