import { combineReducers } from 'redux';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer
    })
}