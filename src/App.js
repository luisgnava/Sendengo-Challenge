import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/header.jsx';
import Formulario from './components/formulario.jsx';
import Success from './components/success.jsx';

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/"></Link>
                <Link to="/submit"></Link>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Formulario />
                    </Route>
                    <Route path="/submit">
                        <Success />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
 };
                        
