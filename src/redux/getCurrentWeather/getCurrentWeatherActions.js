import { apiKey } from '../../api/apiKey'
import axios from 'axios'
import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE
} from './getCurrentWeatherTypes'

export const fetchcurrentWeatherRequest = () => {
    return {
        type: FETCH_CURRENT_WEATHER_REQUEST
    }
}

const fetchcurrentWeatherSuccess = (weather, locationKey, locationName) => {
    return {
        type: FETCH_CURRENT_WEATHER_SUCCESS,
        id: locationKey,
        payload: [weather, weather[0].locationName= locationName, weather[0].locationKey= locationKey]
    }
}

const fetchcurrentWeatherFailure = error => {
    return {
        type: FETCH_CURRENT_WEATHER_FAILURE,
        payload: error
    }
}

export const fetchcurrentWeather = (locationKey, locationName) => {
    return (dispatch) => {
        dispatch(fetchcurrentWeatherRequest)
        const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
        const query = `?apikey=${apiKey}&language=en-us`
        axios.get(currentLocation + query)
            .then(response => {
                const weather = response.data
                dispatch(fetchcurrentWeatherSuccess(weather, locationKey, locationName))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchcurrentWeatherFailure(errorMsg))
            })
    }
}