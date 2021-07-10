import React from 'react';
import { Route,Switch,withRouter } from 'react-router-dom'

import ContaReceberListagem from "./conta-receber-listagem"
import ContaReceberFormulario from "./formulario-conta-receber"


function Rota(){
       
    return ( 
        <Switch>
            <Route  exact path={'/conta-receber'} component={ContaReceberListagem}/>
            <Route exact path={'/conta-receber/cadastro/:id'} component={ContaReceberFormulario}/>
        </Switch>)
    
}

export default withRouter(Rota)