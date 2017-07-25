import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/reducer.jsx';
import thunkMiddleware from 'redux-thunk';
import reduxLog from './reduxLog.js'

export default function configStore(preloadedState) {
    const store = createStore(rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware,reduxLog));
    return store;
}