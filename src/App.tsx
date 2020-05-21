import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './app.history';

import Home from './pages/Home/home';

import './App.scss';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
