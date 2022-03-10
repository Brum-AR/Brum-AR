import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ArItem from './components/ArItem';
import ScooterDetails from './components/ScooterDetails';
import Cart from "./components/Cart/Cart";

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
                    <Route path='/ar' component={ArItem}/>
                    <Route path='/test' component={ScooterDetails}/>
                    <Route path='/cart' component={Cart}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
