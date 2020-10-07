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

export const fetchfiveDaysForecasts = (locationKey) => { //special. return a function(not have to be pure) and not an action
    // console.log("locationKey from fetchfiveDaysForecasts")
    // console.log(locationKey)
    return (dispatch) => {
        dispatch(fetchfiveDaysForecastsRequest)

        const forecasts = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`
        const query = `?apikey=${apiKey}&q=en-us&metric=true`
        // const query = `?apikey=${apiKey}&q=en-us&metric=${!presentFahrenheit}`
        axios.get(forecasts + query)
            .then(response => {
                // console.log("response from fetchfiveDaysForecasts")
                // console.log(response)
                const fiveDaysForecasts = response.data
                dispatch(fetchfiveDaysForecastsSuccess(fiveDaysForecasts))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchfiveDaysForecastsFailure(errorMsg))
            })
    }
}