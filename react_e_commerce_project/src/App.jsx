import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home_Page/HomePage';
import ShopPage from './pages/Shop_Page/ShopPage';
import SignInAndSignUp from './pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up';
import Header from './components/Header/Header';

import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signIn' component={SignInAndSignUp} />
            </Switch>
        </div>
    );
}

export default App;
