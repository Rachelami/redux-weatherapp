import {
    FETCH_GEOLOCATION_REQUEST,
    FETCH_GEOLOCATION_SUCCESS,
    FETCH_GEOLOCATION_FAILURE
} from './getGeoLocationTypes'

const initialState = {
    loading: false,
    coords: null,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GEOLOCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GEOLOCATION_SUCCESS:
            return {
                loading: false,
                coords: action.payload,
                error: ''
            }
        case FETCH_GEOLOCATION_FAILURE:
            return {
                loading: false,
                coords: [],
                error: action.payload
            }
        default: return state

    }
}
export default reducer
