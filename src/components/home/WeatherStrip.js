import React, { useState, useEffect } from 'react'
import { ApiContext } from '../ApiContext'
import DailyWeather from './DailyWeather'
import Toast from '../Toast'

const WeatherStrip = ({ cityWeather, presentFahrenheit }) => {
    const [fiveDaysWeather, setFiveDaysWeather] = useState([])
    const [expended, setExpended] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [apiContext] = React.useContext(ApiContext)

    const fiveDaysForecasts = async () => {
        try {
            const forecasts = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityWeather.locationKey}`
            const query = `?apikey=${apiContext}&q=en-us&metric=${!presentFahrenheit}`
            const response = await fetch(forecasts + query)
            const data = await response.json()

            setFiveDaysWeather(data)

        } catch (err) {
            setErrorMessage('Cannot fetch because Api limitation')
        }
    }

    useEffect(() => {
        if (expended) {
            fiveDaysForecasts()
        }
    }, [expended, presentFahrenheit])

    useEffect(() => {
        if (isFavorite) {
            let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
            storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}
            storedFavoriteCities[`${cityWeather.cityName}`] = cityWeather
            localStorage.setItem('storedFavoriteCities', JSON.stringify(storedFavoriteCities))
        } else {
            let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
            storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}
            delete storedFavoriteCities[`${cityWeather.cityName}`]
            localStorage.setItem('storedFavoriteCities', JSON.stringify(storedFavoriteCities))
        }
    }, [isFavorite])

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    const hendleOnClick = () => {
        setExpended(expended ? false : true)
    }

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

    return (
        <>
            <div className="weather-strip-container">
                <div className="weather-strip" onClick={() => hendleOnClick()} >
                    <div className="weather-info-container">
                        < div>{capitalize(cityWeather.cityName)}</ div>
                        <div className="flex">
                            <img src={process.env.PUBLIC_URL + `/images/weather-icons/${cityWeather.WeatherIcon}.svg`} className="temp-logos" />
                            <div>{capitalize(cityWeather.WeatherText)}</div>
                        </div>
                        {presentFahrenheit ?
                            <div>{Math.round(cityWeather.Temperature.Imperial.Value)}&deg;F</div> :
                            <div>{Math.round(cityWeather.Temperature.Metric.Value)}&deg;C</div>
                        }
                    </div>

                    < div className="five-days-container" >
                        {(fiveDaysWeather.length != 0 && expended) && fiveDaysWeather.DailyForecasts.map((dailyForecast) => (
                            <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                        ))
                        }
                    </div>
                </div>
                <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo" onClick={() => favorite()} />
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default WeatherStrip