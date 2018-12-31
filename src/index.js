import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import './normalise.css';
import App from './components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
/**
 *Todo
 * integrate redux to this and design a flow to create a new state all together
 */
