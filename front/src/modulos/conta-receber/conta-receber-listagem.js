import { Tabela }  from '../../componetesCompartilhados/tabela.js'
import React from 'react';
import { Button } from 'primereact/button';


class ContaReceberListagem extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      resultado: [
        {"id_status": "1",'devedor':'tatiana','id':'1','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "2",'devedor':'tatiana','id': '2','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'3','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "3",'devedor':'tatiana','id':'4','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'5','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "2",'devedor':'tatiana','id': '6','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "2",'devedor':'tatiana','id':'7','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "3",'devedor':'tatiana','id':'8','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'9','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "3",'devedor':'tatiana','id': '10','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'11','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "2",'devedor':'tatiana','id':'12','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'13','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "3",'devedor':'tatiana','id': '14','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "3",'devedor':'tatiana','id':'15','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "3",'devedor':'tatiana','id':'16','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "2",'devedor':'tatiana','id':'17','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "2",'devedor':'tatiana','id': '18','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'19','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {"id_status": "1",'devedor':'tatiana','id':'20','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        
      ],
      header :[
          {"nomeTabela":'Id',"nomeBanco":"id"},
          {
            nomeTabela:'Devedor',
            nomeBanco:'devedor'
          },
          {'nomeTabela':'Data Vencimento',"nomeBanco":"data_vencimento"},
          {"nomeTabela":'Status',"nomeBanco": "id_status"},
          {"nomeTabela":'Observações',"nomeBanco":"observacoes"},
          {"nomeTabela":'Natureza',"nomeBanco":"natureza"},
          {"nomeTabela":'Valor',"nomeBanco":"valor"},
          {"nomeTabela":'Recorrente',"nomeBanco":"recorente"},
          {"nomeTabela":'Dia Vencimento Recorrente',"nomeBanco":"dia_vencimento_recorrente"}
         

      ]
    }  
    
  }
  algo(id){
    window.location = '/cadastroContaReceber'
    console.log(id)
  }
  render(){
    console.log(this.state.resultado)

         const aplicaMask = (value)=>{  return value == 1 ? 'pago' : (value == 2 ? 'devendo': (value == 3 ?  'pago part' : value))}
         const macaraOb = (value)=>{return value == undefined ? 'zerado' : 'nada mesmo'}
        return (
          <div className="listagem-conta-receber p-m-3" >
              <div className="p-d-flex p-jc-between">
                <div>
                  <Button label="Criar Novo"  icon="pi pi-plus" iconPos="right" className="p-mt-4 p-button-rounded p-button-success" onClick={()=>{this.props.history.push("/conta-receber/cadastro/novo")}}/>
                </div>  
                <h1> Listagem Contas a Receber</h1>
              </div>
              <Tabela history={this.props.history} headers={this.state.header} url={'listar'}  mask={{'observacoes': macaraOb,'id_status':aplicaMask}} values={ this.state.resultado}/> 

          </div>
        );  
  }       
}

export default ContaReceberListagem;
