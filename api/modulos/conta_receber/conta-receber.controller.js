const conexao = require('../../conexao.js')

class contaReceberController{

    async listar(id = null, filtro = null, busca = null){

        try{
            const conn = await conexao.conexao()
            
            let sql = 'SELECT * FROM conta_receber '

            const [ retorno ] = await conn.query(sql)

            return retorno
        }catch{

            console.log('erro banco')
            return false
        }    

    }
    async criar(dados){

        try{
            const conn = await conexao.conexao()
            
            let sql = 'INSERT INTO conta_receber SET data_cadastro = NOW() '

            let valores = []

            Object.keys(dados).forEach(function (key){
                sql += ` ,${key} = ?`
                valores.push(dados[key])
            });

            console.log(sql)

            const [ retorno ] = await conn.query(sql,valores)

            return retorno

        }catch{

            console.log('erro banco')
            return false
        }    

    }
    async atualizar(dados){

        try{
            const conn = await conexao.conexao()
            
            let sql = 'UPDATE conta_receber SET '

            let valores = []
            let contador = true

            let id = dados.id
            delete dados.id

            Object.keys(dados).forEach(function (key){

                if(contador){
                    sql += ` ${key} = ?`
                    contador = false
                }else{
                    sql += `,${key} = ?`
                }    
                valores.push(dados[key])
            });

            sql += ' WHERE id = ?'
            valores.push(id)

            const [ retorno ] = await conn.query(sql,valores)

            return retorno

        }catch{

            console.log('erro banco')
            return false
        }    

    }
    async deletar(body){

        try{
            const id = body.id

            const conn = await conexao.conexao()
            
            let sql = 'UPDATE conta_receber SET excluido = NOW() WHERE id = ? '

            const [ retorno ] = await conn.query(sql,id)

            return retorno
        }catch{

            console.log('erro banco')
            return false
        }    

    }
    
}

module.exports =  contaReceberController