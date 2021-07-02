const express = require('express')
const { token } = require('morgan')
const inicio = express.Router()

const ContaReceberController = require('./conta-receber.controller.js')

const controller = new ContaReceberController()

inicio.get('/listar',async function(req,res){  
    
    const filtro = req.query

    const listaReceber = await controller.listar(filtro)

    res.json(listaReceber)
})

inicio.post('/criar',async function(req,res){   
    
    const body = req.body
    
    const listaReceber = await controller.criar(body)

    res.send({listaReceber})
})

inicio.post('/atualizar',async function(req,res){   
    
    const body = req.body
    
    const listaReceber = await controller.atualizar(body)

    res.send({listaReceber})
})

inicio.post('/deletar',async function(req,res){   
    
    const body = req.body
    
    const listaReceber = await controller.deletar(body)

    res.send({listaReceber})
})
   


module.exports =  inicio
