
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => (
    <div className="jumbotron">
        <h1 className="display-4">React boilerplate <br />with Hot Loader plugin</h1>
        <p className="lead">Set up to work with sass and bootstrap.</p>
    </div>
);
 
export default hot(App);


