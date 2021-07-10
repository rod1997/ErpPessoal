import React from 'react';
import { Route ,Switch,withRouter} from 'react-router-dom'
import ContaPagarListagem from "./contas-pagar-listagem"


function Rota(){
       
    return ( 
        <Switch>
            <Route exact path={'/conta-pagar'} component={ContaPagarListagem}/>
        </Switch>)
    
}

export default withRouter(Rota)