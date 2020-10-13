import {
    SET_FAVORITE_CITY,
    RESET_FAVORITE_CITY
} from './getFavoriteCityTypes'

export const setFavoriteCity = cityInfo => (dispatch) => {
    dispatch({
        type: SET_FAVORITE_CITY,
        payload: cityInfo
    })
}

export const resetFavoriteCity = () => (dispatch) => {
    dispatch({
        type: RESET_FAVORITE_CITY,
    })
}
