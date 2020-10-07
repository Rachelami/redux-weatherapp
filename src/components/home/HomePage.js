import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { CityContext } from '../CityContext'
import { ApiContext } from '../ApiContext'
import WeatherStrip from './WeatherStrip'
import FavoriteCityDetails from '../favorite/FavoriteCityDetails'
import Toast from '../Toast'
import CitiesContainer from './CitiesContainer'

const HomePage = ({ searchString }) => {
    const [allCitiesWeather, setAllCitiesWeather] = useState([])
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [cityContext] = React.useContext(CityContext)
    const [apiContext, setApiContext] = React.useContext(ApiContext)


    useEffect(() => {
        setApiContext('WX2KCJS3eyjIBRu3PMZDU7QNxNu1VPnK')
    }, [])

    useEffect(() => {
        if (searchString.length >= 1) {
            getCities(searchString)
        }
    }, [searchString])

    const getCities = async (userInput) => {
        try {
            const cities = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
            const query = `?apikey=${apiContext}&q=${userInput}`
            const response = await fetch(cities + query)
            const data = await response.json()

            let allCitiesCurrentWeather = await Promise.all(data.map(async city => {
                return await getCurrentWeather(city.Key, city.LocalizedName)

            }))

            setAllCitiesWeather(allCitiesCurrentWeather)

        } catch (err) {
            setErrorMessage('Cannot fetch because Api limitation')
        }
    }

    const getCurrentWeather = async (locationKey, locationName) => {
        try {
            const currentLocation = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
            const query = `?apikey=${apiContext}&language=en-us`
            const response = await fetch(currentLocation + query)
            const data = await response.json()
            data[0].cityName = locationName
            data[0].locationKey = locationKey
            return data

        } catch (err) {
            setErrorMessage('Cannot fetch because Api limitation')
        }
    }

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    return (
        <>
            <Form className="switch-to-fahrenheit-continer">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={`Switch ${presentFahrenheit ? "Back To Celsius" : "To Fahrenheit"}`}
                    onChange={switchToFahrenheit}
                />
            </Form>
            <CitiesContainer userInput={searchString}/>
            {!cityContext &&
                <div className="location-card">
                    {allCitiesWeather.map((cityWeather) => (
                        <>
                            {cityWeather &&
                                <WeatherStrip
                                    key={cityWeather[0].locationKey}
                                    cityWeather={cityWeather[0]}
                                    presentFahrenheit={presentFahrenheit}
                                    apiKey={apiContext} />
                            }
                        </>
                    ))}
                </div>
            }
            {cityContext && <FavoriteCityDetails presentFahrenheit={presentFahrenheit} />}
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default HomePage