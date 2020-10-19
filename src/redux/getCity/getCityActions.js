import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE
} from './getCityTypes'

export const fetchCitiesRequest = userInput => {
    return {
        type: FETCH_CITIES_REQUEST,
        payload: userInput
    }
}

export const fetchCitiesSuccess = cities => {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}

export const fetchCitiesFailure = error => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error
    }
}