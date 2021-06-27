import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';


class MenuPrincipal extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label:'Financeiro',
                icon:'pi pi-dollar',
                items:[
                    {
                        label:'Conta a receber',
                        icon:'pi pi-dollar',
                        command:() => this.props.history.push('/conta-receber')

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
                <div style={{backgroundColor: "#0ddd",height : '10vh' }} >
                </div>                    
                <div className="p-d-flex">
                    <div className="card p-mr-2" style={{ width: '22rem', height : '90vh',backgroundColor: "#0ddd"}}>
                        <h1 className="p-text-center p-text-justify">ERP PESSOAL</h1>
                        <PanelMenu model={this.items} style={{ width: '22rem' }}/>
                    </div>
                    <div id="main" className="p-mr-2" >
                        <main>
                            <div className="content p-shadow-24 p-mt-4" id="content">
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