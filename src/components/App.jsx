
import React, { Component } from 'react';
// Important - do not remove ***************
import { hot } from 'react-hot-loader/root';
// *****************************************

// ***************************************** START
const App = () => (
    <div className="jumbotron">
        <h1 className="display-4">React boilerplate <br />with Hot Loader plugin</h1>
        <p className="lead">Set up to work with sass and bootstrap.</p>
    </div>
);
// ***************************************** END

// export as an argument to a hoc 
export default hot(App);