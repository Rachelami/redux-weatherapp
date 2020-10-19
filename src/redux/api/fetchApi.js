import { apiKey } from '../../api/apiKey'
import axios from 'axios'


const fetchCities = async (userInput) => {
    const cities = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
    const query = `?apikey=${apiKey}&q=${userInput}`
    const data = await axios.get(cities + query)
        .then(response => {
            console.log('response.data from fetch cities')
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            return error.message
        })
    return data
}


const fetchcurrentWeather = async (Key) => {
    const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/${Key}`
    const query = `?apikey=${apiKey}&language=en-us`
    const data = await axios.get(currentLocation + query)
        .then(response => {
            console.log('response.data from fetch current location')
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            return error.message
        })
    return data
}

const fetchfiveDaysForecasts = async (Key, presentFahrenheit) => {
    const forecasts = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}`
    const query = `?apikey=${apiKey}&q=en-us&metric=${!presentFahrenheit}`
    const data = await axios.get(forecasts + query)
        .then(response => {
            console.log('response.data from 5 days forecast')
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            return error.message
        })
    return data
}



export { fetchCities, fetchcurrentWeather, fetchfiveDaysForecasts }

