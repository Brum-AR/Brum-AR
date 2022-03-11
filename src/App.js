import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cart from './components/Cart/Cart.js';

import  ScooterDetails  from './components/ScooterDetails';
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
           <Route path='/test' component={ScooterDetails} />
           <Route path='/details/:id' component={ScooterDetails} />
           <Route path='/login' component={Login} />
           <Route path='/cart' component={Cart}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
