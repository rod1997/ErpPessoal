
async function conexao(){


    if(global.conection && global.conection !== 'disconnected')
        return global.conection

    const mysql = require('mysql2/promise')
    const conection  = await mysql.createConnection('mysql://rodrigo:9844@localhost:3306/erpPessoal')
    global.conection = conection
    console.log('conectou')
    return conection
}
  
module.exports = { conexao }