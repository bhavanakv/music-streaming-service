import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home.jsx';

class RoutesSwitch extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" render={() => <Home /> } />
            </Switch>
        );

    }
}

export default RoutesSwitch;