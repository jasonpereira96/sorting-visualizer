import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { generateArray } from './utils/utils'
import { MERGESORT } from './constants/constants'
/*
disable the sorting button after its pressed once
IMPORTNANT : GET PROVIDER TO WORK ffuck
*/
let initialState = {
	toolbar: {
		sortSpeed: 50,//ms 10 - 200
		arraySize: 10,
		controlsEnabled: true,
		algo: MERGESORT
	},
	// array: [60, 45, 30, 25, 90, 66, 98, 29, 78, 50, 55, 22, 88, 21, 76, 20, 10, 36, 56, 79, 44]
	array: generateArray(10)
}
let store = createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}><App /></Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
