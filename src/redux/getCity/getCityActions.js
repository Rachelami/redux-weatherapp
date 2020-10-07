import {apiKey} from '../../api/apiKey'
import axios from 'axios'
import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE
} from './getCityTypes'

export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST
    }
}

const fetchCitiesSuccess = cities => {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}

const fetchCitiesFailure = error => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error
    }
}

export const fetchCities = (userInput) => { //special. return a function(not have to be pure) and not an action
    console.log("userInput from fetchCitiesRequest")
    console.log(userInput)
    return (dispatch) => {
        dispatch(fetchCitiesRequest)
        const cities = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
        // const query = `?apikey=${apiKey}&q=p`
        const query = `?apikey=${apiKey}&q=${userInput}`
        axios.get(cities + query)
            .then(response => {
                console.log(response)
                // console.log(response.json())
                const cities = response.data
                dispatch(fetchCitiesSuccess(cities))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCitiesFailure(errorMsg))
            })
    }
}