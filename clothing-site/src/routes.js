import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import Cart from './components/Cart/Cart';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Account' component={Account} />
        <Route path='/Cart' component={Cart} />
        <Route path='/Mens' component={Mens} />
        <Route path='/Womens' component={Womens} />
    </Switch>
)
