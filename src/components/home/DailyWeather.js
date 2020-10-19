import React, { useState, useEffect } from 'react'
import { OneDay, WeatherIcon } from '../../styled/dailyWeather'
import { Flex } from '../../styled/shared'

const DailyWeather = ({ dailyForecast, presentFahrenheit }) => {
    const [day, setDay] = useState([])
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        const date = new Date(dailyForecast.Date)
        const day = date.getDay()
        setDay(daysInWeek[day])
    }, [])

    return (
        <OneDay >
            <WeatherIcon src={process.env.PUBLIC_URL + `/images/weather-icons/${dailyForecast.Day.Icon}.svg`} />
            <Flex>
                <div>{Math.round(dailyForecast.Temperature.Minimum.Value)}&deg;{presentFahrenheit ? 'F' : 'C'} -</div>
                <div>&nbsp;{Math.round(dailyForecast.Temperature.Maximum.Value)}&deg;{presentFahrenheit ? 'F' : 'C'}</div>
            </Flex>
            <div>{day}</div>
        </OneDay>
    )
}

export default DailyWeather