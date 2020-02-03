import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Header from './components/header.jsx';
import Formulario from './components/formulario.jsx';

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/submit">Submit</Link>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Formulario />
                    </Route>
                    <Route path="/submit">
                        <Submit />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
 };
                        
 export function Submit() {
                return(
                        <div>
                        <Link to='/submit'>
                            <Button>
                                
                            </Button>
                        </Link>
                    </div>
            )
};
