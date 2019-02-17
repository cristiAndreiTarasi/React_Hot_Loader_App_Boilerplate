// babel polyfill for new features - generators, async/await etc
import '@babel/polyfill';

// react modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// styles related modules and files
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// main component
import App from './components/App.jsx';

// React Hot Loader stuff beyond this point - don't tamper with :))
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>, 
        document.getElementById('root')
    );
}

render(App);

if(module.hot) {
    module.hot.accept('./components/App.jsx', () => { render(NextApp) });
}

