import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home.jsx';
import MainPage from './MainPage.jsx';
import About from './About.jsx';

class RoutesSwitch extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" render={() => <Home /> } />
                <Route exact path="/mainpage" render={() => <MainPage />} />
                <Route exact path="/about" render={() => <About />} />
            </Switch>
        );

    }
}

export default RoutesSwitch;