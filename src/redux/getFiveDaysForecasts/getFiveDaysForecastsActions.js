import { apiKey } from '../../api/apiKey'
import axios from 'axios'
import {
    FETCH_FIVE_DAYS_FORECASTS_REQUEST,
    FETCH_FIVE_DAYS_FORECASTS_SUCCESS,
    FETCH_FIVE_DAYS_FORECASTS_FAILURE
} from './getFiveDaysForecastsTypes'

export const fetchfiveDaysForecastsRequest = () => {
    return {
        type: FETCH_FIVE_DAYS_FORECASTS_REQUEST
    }
}

const fetchfiveDaysForecastsSuccess = fiveDaysForecasts => {
    return {
        type: FETCH_FIVE_DAYS_FORECASTS_SUCCESS,
        payload: fiveDaysForecasts
    }
}

const fetchfiveDaysForecastsFailure = error => {
    return {
        type: FETCH_FIVE_DAYS_FORECASTS_FAILURE,
        payload: error
    }
}

export const fetchfiveDaysForecasts = (Key, presentFahrenheit) => {
    return (dispatch) => {
        dispatch(fetchfiveDaysForecastsRequest)

        const forecasts = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}`
        const query = `?apikey=${apiKey}&q=en-us&metric=${!presentFahrenheit}`
        axios.get(forecasts + query)
            .then(response => {
                const fiveDaysForecasts = response.data
                dispatch(fetchfiveDaysForecastsSuccess(fiveDaysForecasts))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchfiveDaysForecastsFailure(errorMsg))
            })
    }
}