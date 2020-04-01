import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from './reducers/index';
import App from './components/App';

const store = createStore(
    reducers,
    compose(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));