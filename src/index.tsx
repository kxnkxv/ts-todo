import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import 'antd/dist/antd.css';
import "./index.css"
import "normalize.css"

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
