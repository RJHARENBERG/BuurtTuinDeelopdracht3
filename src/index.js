import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        {/*<React.StrictMode>*/}
            <App/>
        {/*</React.StrictMode>*/}
    </Router>
);
reportWebVitals();
