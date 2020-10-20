import {
    SET_DARK_VIEW,
    SET_SAGA_DARK_VIEW
} from './darkViewTypes'

export const setDarkView = isDark => {
    return {
        type: SET_DARK_VIEW,
        payload: isDark
    }
}

export const setSagaDarkView = isDark => {
    return {
        type: SET_SAGA_DARK_VIEW,
        payload: isDark
    }
}