import {
    SET_FAVORITE_CITY,
    RESET_FAVORITE_CITY,
    SET_FAVORITE_SAGA_CITY,
    RESET_FAVORITE_SAGA_CITY
} from './getFavoriteCityTypes'

export const setFavoriteCity = cityInfo => {
    return {
        type: SET_FAVORITE_CITY,
        payload: cityInfo
    }
}

export const setFavoriteSagaCity = cityInfo => {
    return {
        type: SET_FAVORITE_SAGA_CITY,
        payload: cityInfo
    }
}

// export const setFavoriteCity = cityInfo => (dispatch) => {
//     dispatch({
//         type: SET_FAVORITE_CITY,
//         payload: cityInfo
//     })
// }

export const resetFavoriteCity = () => {
    return {
        type: RESET_FAVORITE_CITY,
    }
}
export const resetFavoriteSagaCity = () => {
    return {
        type: RESET_FAVORITE_SAGA_CITY,
    }
}
// export const resetFavoriteCity = () => (dispatch) => {
//     dispatch({
//         type: RESET_FAVORITE_CITY,
//     })
// }
