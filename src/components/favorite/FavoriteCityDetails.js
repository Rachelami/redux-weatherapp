import React, { useEffect, useState } from 'react'
import { ApiContext } from '../ApiContext'
import { CityContext } from '../CityContext'
import DailyWeather from '../home/DailyWeather'
import Toast from '../Toast'

const FavoriteCityDetails = ({ presentFahrenheit }) => {
    const [cityContext] = React.useContext(CityContext)
    const [fiveDaysWeather, setFiveDaysWeather] = useState([])
    const [apiContext] = React.useContext(ApiContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [isFavorite, setIsFavorite] = useState(true)

    useEffect(() => {
        fiveDaysForecasts()
    }, [presentFahrenheit, apiContext])

    const fiveDaysForecasts = async () => {
        try {
            const forecasts = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityContext.locationKey}`
            const query = `?apikey=${apiContext}&q=en-us&metric=${!presentFahrenheit}`
            const response = await fetch(forecasts + query)
            const data = await response.json()

            setFiveDaysWeather(data)

        } catch (err) { }
    }

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    useEffect(() => {
        if (isFavorite) {
            let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
            storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}
            storedFavoriteCities[`${cityContext.cityName}`] = cityContext
            localStorage.setItem('storedFavoriteCities', JSON.stringify(storedFavoriteCities))
        }
        else {
            let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
            storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}
            delete storedFavoriteCities[`${cityContext.cityName}`]
            localStorage.setItem('storedFavoriteCities', JSON.stringify(storedFavoriteCities))
        }
    }, [isFavorite])

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
      
    return (
        <>
            <div className="favorite-city-details-card">
                <div className="favorite-city-details-image-continer">
                    <img src={cityContext.IsDayTime ? process.env.PUBLIC_URL + '/images/day.gif' : process.env.PUBLIC_URL + '/images/night.gif'} className="day-night" />
                    <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="star" onClick={() => favorite()} />
                </div>
                <div className="favorite-city-details-header">
                    <h2>{capitalize(cityContext.cityName)}</h2>
                    <img src={process.env.PUBLIC_URL + `/images/weather-icons/${cityContext.WeatherIcon}.svg`} className="temp-favorite-logo" />
                </div>

                {presentFahrenheit ?
                    <h4>{Math.round(cityContext.Temperature.Imperial.Value)}&deg;F</h4> :
                    <h4>{Math.round(cityContext.Temperature.Metric.Value)}&deg;C</h4>
                }

                < div className="five-days-container" >
                    {(fiveDaysWeather.length != 0) && fiveDaysWeather.DailyForecasts.map((dailyForecast) => (
                        <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                    ))
                    }
                </div>
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default FavoriteCityDetails