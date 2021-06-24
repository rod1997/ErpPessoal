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
            mask : props.mask,
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
 
    render() {

        var dadoss = this.state.values
        let data = []
        let dados = this.state.headers   

        for(let c=0 ; c < dadoss.length; c++){

            let linha = dadoss[c]

            let objlinha = []

            dados.forEach(key => {
                
                if(key == 'data_cadastro'|| key == "data_vencimento"){

                    linha[key] = linha[key].substring(0,10)
                }
                if(this.state.mask[key]){

                    var mask =  this.state.mask[key]
                    linha[key] = mask(linha[key])
                }
                objlinha.push(<td className="row">{linha[key]}</td>)

            })

            let botaoEditar = <Button icon="pi pi-search" onClick={() => window.location = `${window.location.pathname}/cadastro/${linha.id}`} className="p-button-rounded p-button-info" />
            let botaoExcluir = <Button onClick={()=> { this.confirm() } } icon="pi pi-times" className="p-button-rounded p-button-danger p-ml" />


            data.push(<tr>{objlinha}<td className="row">{botaoEditar}{botaoExcluir}</td></tr>)
        }

        let coluna = []
        for(let c=0 ; c < dados.length ; c++ ){
        
            coluna.push(<th className="colunas">{dados[c]}</th>)
        }
        coluna.push(<th className="colunas">#</th>)     
        return (
            <th>
            <table className = "tabela"> 
                <thead>
                {coluna}
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>
            </th>
        );
    }
}