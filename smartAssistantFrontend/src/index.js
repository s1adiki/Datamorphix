import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './configureStore';
import registerServiceWorker from "./registerServiceWorker";
import Root from "./components/Root";

const store = configureStore();
ReactDOM.render(
    <Root store = {store}/>,
    document.getElementById('root')
);
registerServiceWorker();
