import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ScooterDetails from './components/ScooterDetails';
import Login from './components/login/Login'
import Cart from "./components/cart/Cart";
import Success from "./components/success/Success";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/sign-up' component={SignUp}/>
                    <Route path='/test' component={ScooterDetails}/>
                    <Route path='/details/:id' component={ScooterDetails}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/success' component={Success}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
