import { IS_FAVORITE } from './getFavoriteTypes'

const initialState = {
    favorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FAVORITE:
            return {
                favorites: action.payload,
            }
        default: return state

    }
}
export default reducer
