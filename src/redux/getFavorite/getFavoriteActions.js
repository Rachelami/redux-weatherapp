import { ADD_TO_FAVORITE, REMOVE_RROM_FAVORITE, ADD_FAVORITE, DELETE_FAVORITE } from './getFavoriteTypes'

// export const addToFavorite = favoriteCity=> (dispatch) => {
//     dispatch({
//         type: ADD_TO_FAVORITE,
//         payload: favoriteCity
//     })
// }

export const addFavorite = favoriteCity => {
    return {
        type: ADD_FAVORITE,
        payload: favoriteCity
    }
}
export const deleteFavorite = key => {
    return {
        type: DELETE_FAVORITE,
        payload: key
    }
}

export const addToFavorite = favoriteCity => {
    return {
        type: ADD_TO_FAVORITE,
        payload: favoriteCity
    }
}

// export const removeFromFavorite = key => (dispatch) => {
//     dispatch({
//         type: REMOVE_RROM_FAVORITE,
//         payload: key
//     })
// }

export const removeFromFavorite = key => {
    return {
        type: REMOVE_RROM_FAVORITE,
        payload: key
    }
}