import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import List from './pages/List'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/list' exact={true} component={List} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes