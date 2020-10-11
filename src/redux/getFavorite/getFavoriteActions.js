import { ADD_TO_FAVORITE, REMOVE_RROM_FAVORITE } from './getFavoriteTypes'

export const addToFavorite = favoriteCity=> (dispatch) => {
    dispatch({
        type: ADD_TO_FAVORITE,
        payload: favoriteCity
    })
}

// const removeFromFavorite = favorites => {
//     return {
//         type: REMOVE_RROM_FAVORITE,
//         payload: favorites
//     }
// }

export const removeFromFavorite = (index)=> (dispatch) => {
    dispatch({
        type: REMOVE_RROM_FAVORITE,
        payload: index
    })
}

// export const handleFavorites = favoriteCity => {
//     return (dispatch) => {
//         dispatch(addToFavorite(favoriteCity))
//     }
// }