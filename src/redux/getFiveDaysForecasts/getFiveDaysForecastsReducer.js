import {
    FETCH_FIVE_DAYS_FORECASTS_REQUEST,
    FETCH_FIVE_DAYS_FORECASTS_SUCCESS,
    FETCH_FIVE_DAYS_FORECASTS_FAILURE
} from './getFiveDaysForecastsTypes'

const initialState = {
    loading: false,
    fiveDaysForecasts: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case FETCH_FIVE_DAYS_FORECASTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_FIVE_DAYS_FORECASTS_SUCCESS:
            return {
                loading: false,
                fiveDaysForecasts: action.payload,
                error: ''
            }
        case FETCH_FIVE_DAYS_FORECASTS_FAILURE:
            return {
                loading: false,
                fiveDaysForecasts: [],
                error: action.payload
            }
        default: return state

    }
}
export default reducer
