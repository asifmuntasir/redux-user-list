import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
    UserReducer
} from './reducers/UserReducer.js'

// const initState = {}

const rootReducer = combineReducers({
    UserReducer
});


const Store = createStore(
    rootReducer,
    // initState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;