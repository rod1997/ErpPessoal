const conexao = require('../../conexao.js')

class contaReceberController{

    async listar(query=null){

        try{
            const conn = await conexao.conexao() 
            let sql = 'SELECT * FROM conta_receber  WHERE excluido IS NULL'
            let sqlTotal = "SELECT COUNT(*) as total_registros FROM conta_receber  WHERE excluido IS NULL"
            let valores = []

            if(query != null && query.id || query.busca || query){

                if(query.id){
                    sql += " AND id = ? "
                    valores.push(query.id)

                }else if(query.busca){
                    sql += " AND devedor LIKE '%"+query.busca+"%'"
                }  
                sql += ` LIMIT ${query.init},${query.quant}`

                const [ retorno ] = await conn.query(sql,valores)
                const  [ total ] = await conn.query(sqlTotal)

                return { "listaReceber" : retorno  , "total_registros":  total[0].total_registros }

            }else{

                const  [ total ] = await conn.query(sqlTotal)

                const [ retorno ] = await conn.query(sql)
                return { "listaReceber" : retorno  , "total_registros":  total[0].total_registros }
            }    

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

            console.log(id)

            let sql = 'UPDATE conta_receber SET excluido = NOW() WHERE id = ? '
            const [ retorno ] = await conn.query(sql,id)

            console.log(sql)
            return retorno

        }catch{

            console.log('erro banco')
            return false
        }    

    }
    
}

module.exports =  contaReceberController