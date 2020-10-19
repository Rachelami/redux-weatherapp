// import { apiKey } from '../../api/apiKey'
// import axios from 'axios'
import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE
} from './getCurrentWeatherTypes'

export const fetchcurrentWeatherRequest = (Key, locationName) => {
    return {
        type: FETCH_CURRENT_WEATHER_REQUEST,
        key: Key,
        locationName: locationName
    }
}

export const fetchcurrentWeatherSuccess = (weather, Key, locationName) => {
    return {
        type: FETCH_CURRENT_WEATHER_SUCCESS,
        id: Key,
        payload: [weather, weather[0].locationName= locationName, weather[0].Key= Key]
    }
}

export const fetchcurrentWeatherFailure = error => {
    return {
        type: FETCH_CURRENT_WEATHER_FAILURE,
        payload: error
    }
}

// export const fetchcurrentWeather = (Key, locationName) => {
//     return (dispatch) => {
//         dispatch(fetchcurrentWeatherRequest)
//         const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/${Key}`
//         const query = `?apikey=${apiKey}&language=en-us`
//         axios.get(currentLocation + query)
//             .then(response => {
//                 const weather = response.data
//                 dispatch(fetchcurrentWeatherSuccess(weather, Key, locationName))
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(fetchcurrentWeatherFailure(errorMsg))
//             })
//     }
// }