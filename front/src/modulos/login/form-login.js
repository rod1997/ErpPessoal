import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'primereact/card';
import {Password} from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./form-login.css"
//<InputText id="inputtext" value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} className="p-invalid" />


class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            login: "",
            senha: "",
            classeLogin: "",
            classeSenha: ""
        }
    }
    validaFormulario(){
        if(this.state.login != "" && this.state.senha != ""){
            this.logar()
        }else{
            this.setState({classeLogin: (this.state.login == ""? "p-invalid" : ""), classeSenha: (this.state.senha == ""? "p-invalid" : "")})
        }
    }
    logar(){
        window.localStorage.token2 = "shdgfsfgvsjfhb9s8yfi237ysfsdyfgsdvf827gfisdyf82ib"
        window.location = '/dashboard'
    }
    render(){
        return(
            <div className="login-form p-d-flex p-jc-center " style={{ width:'100vw',height:"100vh"}}>
                        
                <Card style={{ width:'19vw' ,height:"40vh"}} className="card-login p-jc-center">
                    <h1>Login</h1>
                    <InputText placeholder="preencha o login" className={this.state.classeLogin}
                    value={this.state.login} 
                    onChange={(e) => this.setState({ login: e.target.value })}/><br/>
                    <Password  placeholder="preencha a senha"  
                    value={this.state.senha} 
                    onChange={(e) => this.setState({ senha: e.target.value })}
                    className={this.state.classeSenha}/><br/>
                    <Button label="Submit" loading={false} className="p-button-help" onClick={()=> this.validaFormulario()} />
                </Card>
                
            </div>
        )
    }
}

export default Login