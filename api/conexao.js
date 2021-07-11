
async function conexao(){

    if(global.conection && global.conection !== 'disconnected')
        return global.conection

    const mysql = require('mysql2/promise')
    const conection  = await mysql.createConnection(`mysql://${process.env.USER_BANCO}:${process.env.SENHA_BANCO}@localhost:3306/${process.env.NOME_BANCO}`)
    global.conection = conection
    console.log('conectou')
    return conection
}
  
module.exports = { conexao }