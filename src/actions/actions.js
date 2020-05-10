//actions.js

export const ARRAY_CHANGE = 'ARRAY_CHANGE';
export const DISABLE_CONTROLS = 'DISABLE_CONTROLS'
export const ENABLE_CONTROLS = 'ENABLE_CONTROLS'
export const CHANGE_SPEED = 'CHANGE_SPEED'
export const CHANGE_ALGO = 'CHANGE_ALGO'

export const arrayChange = (array) => {
    return {
        type: ARRAY_CHANGE,
        array
    };
}

export const disableControls = () => {
    return {
        type: DISABLE_CONTROLS
    };
}

export const enableControls = () => {
    return {
        type: ENABLE_CONTROLS
    };
}

export const changeSpeed = newSpeed => {
    return {
        type: CHANGE_SPEED,
        speed: newSpeed
    };
}
export const changeAlgo = newAlgo => {
    return {
        type: CHANGE_ALGO,
        algo: newAlgo
    };
}