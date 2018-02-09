import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import count_reducer from './store/reducers/counter_reducer';
import result_reducer from './store/reducers/result_reducer';
import personReducer from './store/reducers/personReducer';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const rootReducer = combineReducers({
    ctr: count_reducer, 
    res: result_reducer,
    pers: personReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => {
    return next => {
        return action => {
            console.log('Middleware => dispatch : ', action);
            const result = next(action);
            console.log('Middelware next state', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
