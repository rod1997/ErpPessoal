import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'primereact/card';
import {Password} from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./form-login.css"


class Login extends React.Component{

    constructor(props){
        super(props)
    }
    logar(){
        window.localStorage.token2 = "shdgfsfgvsjfhb9s8yfi237ysfsdyfgsdvf827gfisdyf82ib"
        window.location = '/dashboard'
    }
    render(){
        return(
            <div className="login-form p-d-flex p-jc-center p-ai-center" style={{ width:'100vw',height:"100vh"}}>
                <Card style={{ width:'19vw' ,height:"25vh"}} className="card-login p-d-flex p-jc-center p-ai-center ">
                    <InputText placeholder="login" />
                    <Password  placeholder="senha" />
                    <Button label="Submit" loading={false} className="p-button-help" onClick={()=> this.logar()} />
                </Card>
                
            </div>
        )
    }
}

export default Login