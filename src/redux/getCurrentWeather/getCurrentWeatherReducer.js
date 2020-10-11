import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE
} from './getCurrentWeatherTypes'

const initialState = {
    loading: false,
    currentWeather: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case FETCH_CURRENT_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                loading: false,
                id: action.id,
                currentWeather: action.payload,
                error: ''
            }
        case FETCH_CURRENT_WEATHER_FAILURE:
            return {
                loading: false,
                currentWeather: [],
                error: action.payload
            }
        default: return state

    }
}
export default reducer