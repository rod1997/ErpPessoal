import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';




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
    }
    render(){
        
       return (<>  
                    <div id="form-receber" className="p-m-4">
                            <h1 className="">FORMULARIO DE CADASTRO</h1>
                            <h2>{this.props.match.params.id == 'novo'? 'Novo cadastro' : 'Editar Cadastro'}</h2><br/>
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Devedor" />
                            <Dropdown value={this.state.statusContaSelecionado} options={this.statusConta} onChange={(e)=> this.onCityChange(e)} optionLabel="name" placeholder="Selecione a Situacao" />
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Valor" />
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="natureza" /><br/><br/>
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Observaçoes" />
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Recorrente" />
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Dia vencimento Recorrente" /><br/><br/>
                            <Button label="Cadastrar"  onClick={()=> this.enviar()} iconPos="left" loading={this.state.load} />
                            <Button label="Voltar" className="p-button-secondary" onClick={()=> this.props.history.push('/conta-receber')} />
                    </div>        
                </>)       
    }

}    