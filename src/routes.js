import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Containers/Home"
import Orders from "./Containers/Orders"

function Routes(){
    return(

        //path: endereço que vou navegar
        // a barra (/) significa a home da página
        //Com o Switch, a aplicação fica mais performática, sem verificações de todas as rotas, a aplicação navega para a direta que foi requisitada
        <Router>
            
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/Orders" component={Orders}/>
            </Switch>   
        </Router>

    )
}

export default Routes