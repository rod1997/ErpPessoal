import React from 'react';
import { Route } from 'react-router-dom'

import ContaReceberListagem from "./conta-receber-listagem"
import ContaReceberFormulario from "./formulario-conta-receber"


export default function Rota(){
       
    return ( <>
        <Route  exact path={'/conta-receber'} component={ContaReceberListagem}/>
        <Route exact path={'/conta-receber/cadastro/:id'} component={ContaReceberFormulario}/>
        </>)
    
}