import { ENABLE_CONTROLS, DISABLE_CONTROLS, CHANGE_SPEED, CHANGE_ALGO } from './../actions/actions'
let initalState = {
    controlsEnabled: true,
    sortSpeed: 50,//ms 
    arraySize: 10,
}
export default function toolbar(state = initalState, action) {
    if (action.type === ENABLE_CONTROLS) {
        return {
            ...state,
            controlsEnabled: true
        }
    } else if (action.type === DISABLE_CONTROLS) {
        return {
            ...state,
            controlsEnabled: false
        };
    } else if (action.type === CHANGE_SPEED) {
        return {
            ...state,
            sortSpeed: action.speed
        };
    } else if (action.type === CHANGE_ALGO) {
        return {
            ...state,
            algo: action.algo
        };
    } else {
        return state;
    }
}