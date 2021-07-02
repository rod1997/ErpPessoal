import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import Axios from 'axios';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';


export default class ContaReceberFormulario extends React.Component{

    constructor(props){
        super(props)
        this.state  = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            load: false,
            statusContaSelecionado: null
         
        };
        this.statusConta = [
            { name: 'Pago', code: '1' },
            { name: 'Devendo', code: '2' },
            { name: 'Pago parcialmente', code: '3' }
        ];
    }
    onCityChange(e) {
        this.setState({ statusContaSelecionado: e.value });
    }
    enviar(){
        this.setState({load: true})

        let dadosInputs = document.getElementsByClassName('form')
        let dadosForm = {}

        for(let c = 0; c < 5; c++){
            
            if(dadosInputs[c].value !== "" && dadosInputs[c].value != null)
                 dadosForm[`${dadosInputs[c].id}`] = dadosInputs[c].value
        }
        if(this.props.match.params.id != 'novo'){
            dadosForm.id = this.props.match.params.id 
        } 
        if(this.state.statusContaSelecionado != null){
            dadosForm.id_status = this.state.statusContaSelecionado.code
        }

        Axios({
            method: 'post',
            url: `http://localhost:3005/${this.props.match.params.id == 'novo' ? 'criar' : 'atualizar'}`,
            data: dadosForm
        })
        .then((response)=>{
            console.log(response)
            if(response.listaReceber.affectedRows >= 1 ){
                alert('salvo com sucesso')
            }
            this.setState({load: false})
            
        }).catch((erro)=>{

            alert('erro ao salvar')
            console.log(erro)
            this.setState({load: false})
           
        })
          

    }
    render(){
        
       return (<>  
                    <div id="form-receber" className="p-m-4">
                            <h1 className="">FORMULARIO DE CADASTRO</h1>
                            <h2>{this.props.match.params.id == 'novo'? 'Novo cadastro' : 'Editar Cadastro'}</h2><br/>
                            <InputText id="devedor" type="text" className="p-inputtext-lg p-d-block form"  placeholder="Devedor" />
                            <InputText id="data_vencimento" type="text" className="p-inputtext-lg p-d-block form"  placeholder="Data de vencimento" /><br/>
                            <Dropdown value={this.state.statusContaSelecionado} options={this.statusConta} onChange={(e)=> this.onCityChange(e)} optionLabel="name" placeholder="Selecione a Situacao" />
                            <InputText id="valor" type="text" className="p-inputtext-lg p-d-block form"  placeholder="Valor" />
                            <InputText id="natureza" type="text" className="p-inputtext-lg p-d-block form"  placeholder="Natureza" /><br/><br/>
                            <InputText id="observacoes" type="text" className="p-inputtext-lg p-d-block form"  placeholder="Observaçoes" />
                            <InputText id="recorrente"type="text" className="p-inputtext-lg p-d-block form"  placeholder="Recorrente" />
                            <InputText id="vencimento_recorrente" type="text" className="p-inputtext-lg p-d-block form"  placeholder="Dia vencimento Recorrente" /><br/><br/>
                            <Button label="Cadastrar"  onClick={()=> this.enviar()} iconPos="left" loading={this.state.load} />
                            <Button label="Voltar" className="p-button-secondary" onClick={()=> this.props.history.push('/conta-receber')} />
                    </div>        
                </>)       
    }

}    