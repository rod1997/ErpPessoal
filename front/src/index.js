import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import   MenuPrincipal  from './modulos/menu/menu.js';


import ContaReceberRotas from "./modulos/conta-receber/router-conta-receber"
import dashboard from "./dashboard"

ReactDOM.render(
  <BrowserRouter>  
    <MenuPrincipal>
      <Switch>
        <Route exact path={'/'} component={dashboard} />
        <ContaReceberRotas/>
      </Switch>
    </MenuPrincipal>  

  </BrowserRouter>,
  document.getElementById('root')
);


