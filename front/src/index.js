import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './index.css';


//import 'primereact/resources/themes/saga-blue/theme.css'
import  "primereact/resources/themes/bootstrap4-light-purple/theme.css"
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import  MenuPrincipal  from './modulos/menu/menu.js';


import dashboard from "./modulos/dashboard/dashboard.js"

import ContaReceberRotas from "./modulos/conta-receber/router-conta-receber"
import ContaPagarRotas from "./modulos/conta-pagar/router-contas-pagar"
import Login from "./modulos/login/form-login"

const autentifica = ()=>{

  if(window.localStorage.token2 == undefined){
    return false
  }else{
    return true
  }
}

const RotasPrivadas = ()=>{ 
  return (<>
    <MenuPrincipal>
      <Switch>
        <Route exact path={'/dashboard'} component={dashboard} />
      </Switch>
      <ContaReceberRotas/>
      <ContaPagarRotas/>
      <Route path={'/'} component={()=>{ return (<Redirect to="/dashboard"/>) }} />
    </MenuPrincipal>  
    </>)
}
const login = () => {
  return (
    <Switch>
      <Route exact path={'/login'} component={Login} />
      <Route path={'/'} component={()=>{ return (<Redirect to="/login"/>) }} />
    </Switch>
  )
}

ReactDOM.render(
  <BrowserRouter>  
    {autentifica() ? RotasPrivadas(): login()}
  </BrowserRouter>,
  document.getElementById('root')
);


