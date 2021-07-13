import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import Axios from 'axios';
import { Toast } from 'primereact/toast';


export default class ContaReceberFormulario extends React.Component{

    constructor(props){
        super(props)
        this.state  = {
            devedor: '',
            data_vencimento: '',
            valor: '',
            natureza: '',
            observacoes: '',
            vencimento_recorrente: '',
            load: false,
            statusContaSelecionado: null
         
        };
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
        this.statusConta = [
            { name: '', code: '0' },
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
            url: `http://localhost:3005/conta-receber/${this.props.match.params.id == 'novo' ? 'criar' : 'atualizar'}`,
            data: dadosForm,
            headers:{
                token: window.localStorage.getItem("token2")
            }
        })
        .then((response)=>{
            
            if(response.data.listaReceber !== false){
                this.showSuccess()
                setTimeout(()=>{
                    this.setState({load: false})
                    this.props.history.push('/conta-receber') 
                },2200)
            }else{

                this.showError()
                this.setState({load: false})
            }    
            
        }).catch((erro)=>{

            console.log(erro)
            this.showError()
            this.setState({load: false})

           
        })   

    }
    showSuccess() {
        this.toast.show({severity:'success', summary: 'Sucesso', detail: `${this.props.match.params.id == 'novo' ? 'Criado com sucesso' : 'editado com sucesso'}`, life: 2200});
    }
    showError() {
        this.toast.show({severity:'error', summary: 'Error', detail:'Não foi possivel concluir esta ação!', life: 3000});
    }

    componentDidMount(){
        if(this.props.match.params.id !== "novo"){
            let url = `http://localhost:3005/conta-receber/listar?id=${this.props.match.params.id }`
            Axios.get(url,{
                headers:{
                    token: window.localStorage.getItem("token2")
                }
            })
            .then(result=>{

                if(result.status == 200){
                    console.log(result.status)
                    const retorno = result.data.listaReceber[0]
                    
                    this.setState({
                        devedor: retorno.devedor,
                        data_vencimento: retorno.data_vencimento,
                        valor: retorno.valor,
                        natureza: retorno.natureza,
                        observacoes: retorno.observacoes,
                        vencimento_recorrente: retorno.vencimento_recorrente,
                        statusContaSelecionado: this.statusConta[retorno.id_status]
                    })
                }
            }).catch((erro)=>{

                console.log(erro)
                console.log('deu erro')
            
            })
        }    
    }
    render(){

        
       return (
       <>  
        <div id="form-receber" className="p-m-4">
                <Toast ref={(el) => this.toast = el} />
                <h1 className="">FORMULARIO DE CADASTRO</h1>
                <h2>{this.props.match.params.id == 'novo'? 'Novo cadastro' : 'Editar Cadastro'}</h2><br/>

                <InputText id="devedor" value={this.state.devedor} type="text" onChange={(e) => this.setState({devedor: e.target.value})}className="p-inputtext-lg p-d-block form"  placeholder="Devedor" />
                <InputText id="data_vencimento" value={this.state.data_vencimento} type="text" onChange={(e) => this.setState({data_vencimento: e.target.value})} className="p-inputtext-lg p-d-block form"  placeholder="Data de vencimento" /><br/>
                
                <Dropdown value={this.state.statusContaSelecionado} options={this.statusConta} onChange={(e)=> this.onCityChange(e)} optionLabel="name" placeholder="Selecione a Situacao" />
                <InputText id="valor" type="text" value={this.state.valor}className="p-inputtext-lg p-d-block form" onChange={(e) => this.setState({valor: e.target.value})}  placeholder="Valor" />
                <InputText id="natureza" type="text"value={this.state.natureza} className="p-inputtext-lg p-d-block form" onChange={(e) => this.setState({natureza: e.target.value})} placeholder="Natureza" /><br/><br/>
                <InputText id="observacoes" type="text"value={this.state.observacoes} className="p-inputtext-lg p-d-block form"  onChange={(e) => this.setState({observacoes: e.target.value})} placeholder="Observaçoes" />
                <InputText id="recorrente"type="text" value={this.state.recorrente} className="p-inputtext-lg p-d-block form" onChange={(e) => this.setState({recorrente: e.target.value})} placeholder="Recorrente" />
                <InputText id="vencimento_recorrente" value={this.state.vencimento_recorrente} type="text" className="p-inputtext-lg p-d-block form" onChange={(e) => this.setState({vencimento_recorrente: e.target.value})} placeholder="Dia vencimento Recorrente" /><br/><br/>
                <Button label="Cadastrar"  onClick={()=> this.enviar()} iconPos="left" loading={this.state.load} />
                <Button label="Voltar" className="p-button-secondary" onClick={()=> this.props.history.push('/conta-receber')} />
        </div>        
        </>)       
    }

}    