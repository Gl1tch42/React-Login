import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import StoreProvider from './components/Store/provider'
import RoutesPrivate from './components/Routes/private/Private';
import login from './pages/Login';
import Home from './pages/Home';

function Root(){
    return(
        <Router>
            <StoreProvider>
                <Switch>
                    <Route path="/login" component={login} />
                    <RoutesPrivate path="/" component={Home} />
                </Switch>
            </StoreProvider>
        </Router>
    )
}
export default Root;