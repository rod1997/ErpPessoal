import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';
import "./menu.css"


class MenuPrincipal extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label:'Dashboard',
                icon:'pi pi-globe pi-fw',
                command:() => { 
                    if(this.props.history.location.pathname != '/dashboard' )
                        this.props.history.push('/dashboard')
                }
            },
            {
                label:'Financeiro',
                icon:'pi pi-dollar',
                items:[
                    {
                        label:'Conta a receber',
                        icon:'pi pi-dollar',
                        command:() => { 
                            if(this.props.history.location.pathname != '/conta-receber' )
                                this.props.history.push('/conta-receber')
                        }    
                    },
                    {
                        label:'Conta a pagar',
                        icon:'pi pi-fw pi-trash',
                        command:() => { 
                            if(this.props.history.location.pathname != '/conta-pagar' )
                                this.props.history.push('/conta-pagar')
                        }   
                    },
                    {
                        label:'Logar',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Meu Usuario',
                icon:'pi pi-fw pi-user-minus',
                items:[
                    {
                        label:'editar',
                        icon:'pi pi-fw pi-external-link'
                    },
                
                    {
                        label:'sair',
                        icon:'pi pi-fw pi-trash',
                        command:() => { 
                                window.localStorage.removeItem("token2")
                                window.location = '/login'
                        }   
                    }
                ]    
            }
            
        ];
        
       
               
     
    }  
  
    render() {
        return (
            <div className="menu">
                <div style={{backgroundColor: "rgb(157, 99, 212)",height : '10vh', width: '13vw'}} >
                </div>                    
                <div className="p-d-flex">
                    <div className="card p-mr-2" style={{ width: '13vw', height : '90vh',backgroundColor: "rgb(157, 99, 212)"}}>
                        <h1 style={{ width: '13vw' }} className="p-text-center p-text-justify">ERP PESSOAL</h1>
                        <PanelMenu model={this.items} style={{ width: '13vw' }}/>
                    </div>
                    <div id="main"  style={{ width: '87vw',height : '80vh' }} >
                        <main style={{width: '83vw',height : '75vh' }}>
                            <div className="content p-shadow-24 p-mt-4 p-ml-5" id="content" style={{backgroundColor: "rgb(157, 99, 212)"}}>
                                {this.props.children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuPrincipal)