import { ARRAY_CHANGE } from './../actions/actions'

const array = (array = [], action) => {
    if (action.type === ARRAY_CHANGE) {
        return action.array;
    }
    return array;
}

export default array;