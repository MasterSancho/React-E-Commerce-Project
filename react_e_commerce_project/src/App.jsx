import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home_Page/HomePage';
import ShopPage from './pages/Shop_Page/ShopPage';
import SignInAndSignUp from './pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up';
import Header from './components/Header/Header';
import { auth } from './Firebase/firebase.util';

import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
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
}

export default App;
