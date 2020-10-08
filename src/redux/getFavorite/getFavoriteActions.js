import { IS_FAVORITE } from './getFavoriteTypes'

const isFavorite = favorites => {
    return {
        type: IS_FAVORITE,
        payload: favorites
    }
}


export const handleFavorites = (favoriteCity) => {
    return (dispatch) => {
        dispatch(isFavorite(favoriteCity))
    }
}