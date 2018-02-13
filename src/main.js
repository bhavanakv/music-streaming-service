import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import RoutesSwitch from '../components/RoutesSwitch.jsx';
import "./index.css";

ReactDOM.render(
    <Router>
        <RoutesSwitch />
    </Router>, 
document.getElementById('app'));