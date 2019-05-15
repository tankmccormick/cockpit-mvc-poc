import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

let rootUrl = window.location.pathname;
if (rootUrl.length > 1)
    rootUrl = '/' + rootUrl.substring(1).split('/')[0];
else
    rootUrl = '';

var rootElement = document.getElementById('fraudTracker');
ReactDOM.render(
    <BrowserRouter><App rootUrl={rootUrl} token={rootElement.getAttribute('token')} /></BrowserRouter>,
    rootElement
);