import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home_Page/HomePage';
import ShopPage from './pages/Shop_Page/ShopPage';
import Header from './components/Header/Header';

import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
