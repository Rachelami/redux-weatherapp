import { apiKey } from '../../api/apiKey'
import axios from 'axios'


export const fetchCities = async (userInput) => {
    const cities = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
    const query = `?apikey=${apiKey}&q=${userInput}`
    const data = await axios.get(cities + query)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.message
        })
    return data
}


export const fetchcurrentWeather = async (Key) => {
    const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/${Key}`
    const query = `?apikey=${apiKey}&language=en-us`
    const data = await axios.get(currentLocation + query)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.message
        })
    return data
}

export const fetchfiveDaysForecasts = async (Key, presentFahrenheit) => {
    const forecasts = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}`
    const query = `?apikey=${apiKey}&q=en-us&metric=${!presentFahrenheit}`
    const data = await axios.get(forecasts + query)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.message
        })
    return data
}
