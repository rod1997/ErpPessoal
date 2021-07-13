const express = require('express') 
const cors = require('cors')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const auth = require('./modulos/midleware/autenficador')
const login = require("./login/login-router")
const conta_receber = require('./modulos/conta_receber/conta-receber.router.js')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.json())


app.use('/sessao',auth)
app.use('/login',login)
app.use('/conta-receber',auth,conta_receber)



app.listen(3005,()=>{
    console.log("Servidor rodando na porta 3005")
})