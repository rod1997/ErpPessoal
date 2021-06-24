import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



export default class ContaReceberFormulario extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            load: false
        };
    }
    enviar(){
        this.setState({load: true})


    }

    render(){
       //return ( <h1>editando o id { this.props.match.params.id ? this.props.match.params.id : ''}</h1>)

       return (<div>
                <h1>FORMULARIO DE CADASTRO</h1><br/>
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Devedor" />
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Situacao" />
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Data vencimento" /><br/><br/>
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Valor" />
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="natureza" /><br/><br/>
                        <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Devedo" />
                        <Button label="Cadastrar"  onClick={()=> this.enviar()} iconPos="left" loading={this.state.load} />
                        <Button label="Voltar" className="p-button-secondary" onClick={()=> window.history.back()} />
            </div>)
    }

}    