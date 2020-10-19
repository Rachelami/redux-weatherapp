import {
    FETCH_FIVE_DAYS_FORECASTS_REQUEST,
    FETCH_FIVE_DAYS_FORECASTS_SUCCESS,
    FETCH_FIVE_DAYS_FORECASTS_FAILURE
} from './getFiveDaysForecastsTypes'

export const fetchfiveDaysForecastsRequest = (Key, presentFahrenheit) => {
    return {
        type: FETCH_FIVE_DAYS_FORECASTS_REQUEST,
        key: Key,
        presentFahrenheit: presentFahrenheit
    }
}

export const fetchfiveDaysForecastsSuccess = fiveDaysForecasts => {
    return {
        type: FETCH_FIVE_DAYS_FORECASTS_SUCCESS,
        payload: fiveDaysForecasts
    }
}

export const fetchfiveDaysForecastsFailure = error => {
    return {
        type: FETCH_FIVE_DAYS_FORECASTS_FAILURE,
        payload: error
    }
}