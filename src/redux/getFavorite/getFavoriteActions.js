import { IS_FAVORITE } from './getFavoriteTypes'

const isFavorite = favorites => {
    return {
        type: IS_FAVORITE,
        payload: favorites
    }
}


export const handleFavorites = (favoriteCity) => { //special. return a function(not have to be pure) and not an action
    return (dispatch) => {
        dispatch(isFavorite(favoriteCity))
    }
}