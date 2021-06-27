import React from 'react';
import './tabela.css'
import Axios from 'axios';
import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog'; 

export class Tabela extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            values : props.values,
            headers : props.headers,
            url: props.url,
            mask : props.mask || false,
            filtro: 5,
            busca: ''
        }    
    }
    acceptFunc(){
        console.log('sim')
    }
    rejectFunc(){
        console.log('nao')
    }

    confirm(){
        confirmDialog({
            message: 'Quer mesmo fazer isso?',
            header: 'EXCLUIR',
            icon: 'pi pi-exclamation-triangle',
            accept: () => this.acceptFunc(),
            reject: () => this.rejectFunc()
        });
    }
    
    componentDidMount(){
        Axios.get(`http://localhost:3005/${this.state.url}`)
        .then(result=>{

            if(result.status == 200){
                console.log(result.status)
                console.log(result.data.listaReceber)
                const retorno = result.data.listaReceber
                this.setState({values: retorno})
            }

        }).catch((erro)=>{

            console.log(erro)
            console.log('deu erro')
        
        })
    }    
    filtragem(){
        let valorFiltro = document.getElementById('select-filtro').value
        this.setState({filtro: valorFiltro})
    }
    checaFiltro(){
        let tamanhoDados = this.state.values.length
        return this.state.filtro > tamanhoDados ? tamanhoDados : this.state.filtro
    }
    render() {

        var dadosBanco = this.state.values
        let data = []
        let nomesCampos = this.state.headers   

        for(let c=0 ; c < this.checaFiltro() ; c++){

            let linha = dadosBanco[c]

            let objlinha = []

            nomesCampos.forEach(key => {
                
                if(key.nomeBanco == 'data_cadastro'|| key.nomeBanco == "data_vencimento"){

                    linha[key.nomeBanco] = linha[key.nomeBanco].substring(0,10)
                }
                if(this.state.mask[key.nomeBanco]){

                    let mask =  this.state.mask[key.nomeBanco]
                    linha[key.nomeBanco] = mask(linha[key.nomeBanco])
                }
                objlinha.push(<td className="row">{linha[key.nomeBanco]}</td>)

            })

            let botaoEditar = <Button icon="pi pi-search" onClick={() => this.props.history.push(`${window.location.pathname}/cadastro/${linha.id}`)} className="p-button-rounded p-button-info" />
            let botaoExcluir = <Button onClick={()=> { this.confirm() } } icon="pi pi-times" className="p-button-rounded p-button-danger p-ml" />


            data.push(<tr>{objlinha}<td className="row">{botaoEditar}{botaoExcluir}</td></tr>)
        }

        let coluna = []
        for(let c=0 ; c < nomesCampos.length ; c++ ){
        
            coluna.push(<th className="colunas">{nomesCampos[c].nomeTabela}</th>)
        }
        coluna.push(<th className="colunas">#</th>)     
        return (
            <>
            <select id="select-filtro" onChange={()=>{ this.filtragem() }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <input type="text" placeholder="buscar"/><Button>buscar</Button>
            <table className = "tabela"> 
                <thead>
                {coluna}
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>
            </>
        );
    }
}