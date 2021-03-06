import {
    SET_FAVORITE_SAGA_CITY,
    RESET_FAVORITE_SAGA_CITY
} from './getFavoriteCityTypes'

const initialState = {
    favoriteCity: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE_SAGA_CITY:
            return {
                favoriteCity: action.payload,
            }
        case RESET_FAVORITE_SAGA_CITY:
            return {
                favoriteCity: [],
            }
        default: return state
    }
}
export default reducer
