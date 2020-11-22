import React from 'react';
import RoutesApp from './index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={RoutesApp.Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;