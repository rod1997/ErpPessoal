import { Tabela }  from '../../componetesCompartilhados/tabela.js'
import React from 'react';
import { Button } from 'primereact/button';


class ContaReceberListagem extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      resultado: [],
      colunas :[
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
          {"nomeTabela":'Recorrente',"nomeBanco":"recorrente"},
          {"nomeTabela":'Dia Vencimento Recorrente',"nomeBanco":"dia_vencimento_recorrente"}
      ]
    }  
    // usar nome da coluna do banco como referencia
    this.mascaras = {
      valor: (value)=>{ return `R$ ${value}`},
      observacoes: (value)=>{return value == undefined ? 'zerado' : value},
      id_status: (value)=>{  return value == 1 ? 'pago' : (value == 2 ? 'devendo': (value == 3 ?  'pago part' : value))},
      recorrente:  (value)=>{return value == 1 ? 'Sim' : 'Não'}
    }
    
  }
  render(){

        return (
          <div className="listagem-conta-receber p-m-3"  >
              <div className="p-d-flex p-jc-between">
                <div>
                  <Button label="Criar Novo"  icon="pi pi-plus" iconPos="right" className="p-mt-4 p-button-rounded p-button-success" onClick={()=>{this.props.history.push("/conta-receber/cadastro/novo")}}/>
                </div>  
                <h1> Listagem Contas a Pagar</h1>
              </div>
              <Tabela history={this.props.history} headers={this.state.colunas} url={'conta-receber'} mask={this.mascaras} values={ this.state.resultado}/> 

          </div>
        );  
  }       
}

export default ContaReceberListagem;
