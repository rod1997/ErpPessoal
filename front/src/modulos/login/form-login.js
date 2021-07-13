import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'primereact/card';
import {Password} from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./form-login.css"
import Axios from 'axios';
import { Toast } from 'primereact/toast';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            login: "",
            senha: "",
            classeLogin: "",
            classeSenha: ""
        }
        this.showError = this.showError.bind(this);
    }
    validaFormulario(){
        if(this.state.login != "" && this.state.senha != ""){
            this.logar()
        }else{
            this.setState({classeLogin: (this.state.login == ""? "p-invalid" : ""), classeSenha: (this.state.senha == ""? "p-invalid" : "")})
        }
    }
    logar(){

        let url = `http://localhost:3005/login`
        Axios.post(url,
            {
                dados:{
                    login: this.state.login,
                    senha: this.state.senha
                }
            }
        ).then((result)=>{

            if(result.data.resposta == false){

                this.showError()

            }else if(result.data.resposta == true && result.data.token ){

                window.localStorage.setItem("token2",result.data.token)
                window.location = '/dashboard'
            }

        }).catch((erro)=>{
            console.log(erro)
        })
    }
    showError() {
        this.toast.show({severity:'error', summary: 'Error', detail:'Senha incorreta', life: 4000});
    }

    render(){
        return(
            <div className="login-form p-d-flex p-jc-center " style={{ width:'100vw',height:"100vh"}}>
                <Toast ref={(el) => this.toast = el} />
                        
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