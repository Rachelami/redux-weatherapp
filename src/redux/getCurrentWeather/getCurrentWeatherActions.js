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
        payload: [weather, weather[0].locationName = locationName, weather[0].Key = Key]
    }
}

export const fetchcurrentWeatherFailure = error => {
    return {
        type: FETCH_CURRENT_WEATHER_FAILURE,
        payload: error
    }
}