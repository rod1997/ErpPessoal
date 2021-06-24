import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import App from './App';
import ContaReceberFormulario from './modulos/formulario-conta-receber.js'


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/conta-receber" component={App}/> 
        <Route exact path="/conta-receber/cadastro/:id" component={ContaReceberFormulario}/> 
      </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);


