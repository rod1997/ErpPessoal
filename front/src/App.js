import './App.css';

import  { MenuPrincipal } from './modulos/menu';
import { Tabela }  from './modulos/tabela.js'
import React from 'react';


class App extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      resultado: [
        {'devedor':'tatiana','id':'1','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {'devedor':'tatiana','id': '2','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {'devedor':'tatiana','id':'3','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
        {'devedor':'tatiana','id':'4','data_vencimento':'1203-23-23','data_cadastro':'1223-123-123','observacoes':'231','natureza':'3333','valor':'qwe','recorente':'eqwe','dia_vencimento_recorrent':'null','excluido':'null'},
      ],
      header :['devedor','data_vencimento','data_cadastro','observacoes','natureza','valor','recorente','dia_vencimento_recorrente' ]
    }
    
  }
  algo(id){
    window.location = '/cadastroContaReceber'
    console.log(id)
  }
  render(){
    console.log(this.state.resultado)

         const aplicaMask = (value)=>{  return value == 1 ? 'pago' : 'devendo'}
         const macaraOb = (value)=>{return value == undefined ? 'zerado' : 'nada mesmo'}
        return (
          <div className="App">

          <MenuPrincipal/>

          <Tabela headers={this.state.header} url={'listar'}  mask={{'observacoes': macaraOb}} values={ this.state.resultado}/> 

          </div>
        );  
  }        
}

export default App;
