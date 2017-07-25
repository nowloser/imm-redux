/**
 * Created by xiangfahai on 16/7/27.
 */

import { List, Map } from 'immutable';

const init = List([12,44]);
import { combineReducers } from 'redux';

import {CHECK_PERSON,CHECK_ALL_PERSON} from '../action/action.jsx';


function person(state = init, action) {
    switch (action.type) {
        case 'HHH':
            return state.push(action.data);
        default:
            return state;
    }
}


function person1(state = [], action) {
    switch (action.type) {
        case 'HHHH':
            return [...state,action.data];
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    person,
    person1
});

export default rootReducer