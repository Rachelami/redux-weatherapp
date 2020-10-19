import { apiKey } from '../../api/apiKey'
import axios from 'axios'


const fetchCities = async (userInput) => {
    console.log(userInput)
    const cities = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
    const query = `?apikey=${apiKey}&q=${userInput}`
    const data = axios.get(cities + query)
        .then(response => {
            console.log(response.data)
            return response.data
            // dispatch(fetchCitiesSuccess(cities))
        })
        .catch(error => {
            console.log('errr')
            return error.message
            // dispatch(fetchCitiesFailure(errorMsg))
        })




    // axios.get(cities + query)
    // const response = await fetch(cities + query)
    // const response = await axios.get(cities + query)
    // if (response.status !== 400){
    //     console.error(response)
    //     throw new Error("Network Error")
    //     // throw new Error(error.message)
    // }
    // // const cities = response.data
    return data
}

export { fetchCities }

