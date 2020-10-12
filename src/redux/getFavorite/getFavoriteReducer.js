import { ADD_TO_FAVORITE, REMOVE_RROM_FAVORITE } from './getFavoriteTypes'

const initialState = {
    favorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_RROM_FAVORITE:
            return {
                favorites: 
                   state.favorites.filter(function(city) {
                        return city.Key !== action.payload
                      })
            }
        default: return state

    }
}
export default reducer
