import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './index.css';
import Axios from 'axios';

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
const autentifica = ()=>{

  if(window.localStorage.token2 == undefined){

    ReactDOM.render(
      <BrowserRouter>  
        {login()}
      </BrowserRouter>,
      document.getElementById('root')
      );

  }else{
    var token = window.localStorage.getItem("token2")
    let url = "http://localhost:3005/sessao"

    Axios.post(url,{},{
      headers: {
        token: token,
        auth: true
    }})
    .then(result => {
      if(result.data.resposta == true){
        ReactDOM.render(
          <BrowserRouter>  
            {RotasPrivadas()}
          </BrowserRouter>,
          document.getElementById('root')
        );
      }else{
        ReactDOM.render(
          <BrowserRouter>  
            {login()}
          </BrowserRouter>,
          document.getElementById('root')
        );
      }
    })
  }
}
autentifica()


  
  