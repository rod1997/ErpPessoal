import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';


class MenuPrincipal extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label:'Dashboard',
                icon:'pi pi-globe pi-fw',
                command:() => { 
                    if(this.props.history.location.pathname != '/' )
                        this.props.history.push('/')
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
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        label:'Logar',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Usuario',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'usuario',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        label:'Logar',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            }
            
        ];

       
               
     
    }  
  
    render() {
        return (
            <div className="menu">
                <div style={{backgroundColor: "#0ddd",height : '10vh', width: '13vw'}} >
                </div>                    
                <div className="p-d-flex">
                    <div className="card p-mr-2" style={{ width: '13vw', height : '90vh',backgroundColor: "#0ddd"}}>
                        <h1 style={{ width: '13vw' }} className="p-text-center p-text-justify">ERP PESSOAL</h1>
                        <PanelMenu model={this.items} style={{ width: '13vw' }}/>
                    </div>
                    <div id="main"  style={{ width: '87vw',height : '80vh' }} >
                        <main style={{width: '83vw',height : '75vh' }}>
                            <div className="content p-shadow-24 p-mt-4 p-ml-5" id="content" >
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