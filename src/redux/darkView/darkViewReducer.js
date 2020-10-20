import {
    SET_SAGA_DARK_VIEW
} from './darkViewTypes'

const initialState = {
    isDark: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAGA_DARK_VIEW:
            return {
                isDark: action.payload,
            }
        default: return state
    }
}
export default reducer