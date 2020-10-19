import {apiKey} from '../../api/apiKey'
import axios from 'axios'
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

export const fetchCities = (userInput) => {
    return (dispatch) => {
        dispatch(fetchCitiesRequest)
        const cities = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
        const query = `?apikey=${apiKey}&q=${userInput}`
        axios.get(cities + query)
            .then(response => {
                const cities = response.data
                dispatch(fetchCitiesSuccess(cities))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCitiesFailure(errorMsg))
            })
    }
}