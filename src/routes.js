import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header';
import Erro from './Pages/Erro';
import Filme from './Pages/Filme';

const Routes = () => {
        return(
            <BrowserRouter>
                    <Header/>
                    <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exect path ="/filme/:id" component={Filme}/>
                            <Route path="*" component={Erro}/>
                    </Switch>
            </BrowserRouter>
        )
}

export default Routes;