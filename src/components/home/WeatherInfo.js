import React, { useState, useEffect } from 'react'
import DailyWeather from './DailyWeather'

const Weatherinfo = ({ fiveDaysForecasts, weather, presentFahrenheit }) => {
    // const [presentFahrenheit, setPresentFahrenheit] = useState(false)

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            {weather &&
                <div className="weather-strip-container">
                    <div className="weather-strip">
                        <div className="weather-info-container">
                            {/* < div>{capitalize(cityWeather.cityName)}</ div> */}
                            <div className="flex">
                                <img src={process.env.PUBLIC_URL + `/images/weather-icons/${weather.WeatherIcon}.svg`} className="temp-logos" />
                                <div>{capitalize(weather.WeatherText)}</div>
                            </div>
                            {presentFahrenheit ?
                                <div>{Math.round(weather.Temperature.Imperial.Value)}&deg;F</div> :
                                <div>{Math.round(weather.Temperature.Metric.Value)}&deg;C</div>
                            }
                        </div>

                        < div className="five-days-container" >
                            {fiveDaysForecasts &&
                                fiveDaysForecasts.fiveDaysForecasts.DailyForecasts &&
                                fiveDaysForecasts.fiveDaysForecasts.DailyForecasts.map((dailyForecast) => (
                                    <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                                ))
                            }
                        </div>



                    </div>
                </div>
            }
        </>
    )
}

export default Weatherinfo