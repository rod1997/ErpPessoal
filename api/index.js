const express = require('express') 
const cors = require('cors')
const bodyparser = require('body-parser')
const morgan = require('morgan')


const inicio = require('./modulos/conta_receber/conta-receber.router.js')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.json())



app.use('/',inicio)



app.listen(3005,()=>{
    console.log("Servidor rodando na porta 3005")
})