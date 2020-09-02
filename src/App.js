import React, { Component } from 'react';
import './style.css'
import { Route } from 'react-router-dom';
import Routes from './routes';

class App extends Component{
    render(){
        return(
            <div className="app">
                    <Routes/>
            </div>
        );
    }
}

export default App;