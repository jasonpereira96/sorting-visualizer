//reducers index.js
import { combineReducers } from 'redux'
import array from './array'
import toolbar from './toolbar'

export default combineReducers({
    array, toolbar
});