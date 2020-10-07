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

const fetchcurrentWeatherSuccess = weather => {
    return {
        type: FETCH_CURRENT_WEATHER_SUCCESS,
        payload: weather
    }
}

const fetchcurrentWeatherFailure = error => {
    return {
        type: FETCH_CURRENT_WEATHER_FAILURE,
        payload: error
    }
}

export const fetchcurrentWeather = (locationKey) => { //special. return a function(not have to be pure) and not an action
    console.log("locationKey from fetchcurrentWeather")
    console.log(locationKey)
    return (dispatch) => {
        dispatch(fetchcurrentWeatherRequest)
        console.log("return dispatch")

        // const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/215854`
        const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
        const query = `?apikey=${apiKey}&language=en-us`
        axios.get(currentLocation + query)
            .then(response => {
                console.log("response from currentLocation")
                console.log(response)
                const weather = response.data
                dispatch(fetchcurrentWeatherSuccess(weather))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchcurrentWeatherFailure(errorMsg))
            })
    }
}