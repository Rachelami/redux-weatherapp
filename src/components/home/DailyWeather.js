import React, { useState, useEffect } from 'react'

const DailyWeather = ({ dailyForecast, presentFahrenheit }) => {
    const [day, setDay] = useState([])
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        const date = new Date(dailyForecast.Date)
        const day = date.getDay()
        setDay(daysInWeek[day])
    }, [])

    return (
        <div className="one-day-container" >
            <img src={process.env.PUBLIC_URL + `/images/weather-icons/${dailyForecast.Day.Icon}.svg`} className="one-day-temp-logo" />
            <div className='min-max-temp'>
                <div>{Math.round(dailyForecast.Temperature.Minimum.Value)}&deg;{presentFahrenheit ? 'F' : 'C'} -</div>
                <div>&nbsp;{Math.round(dailyForecast.Temperature.Maximum.Value)}&deg;{presentFahrenheit ? 'F' : 'C'}</div>
            </div>
            <div>{day}</div>
        </div>
    )
}

export default DailyWeather