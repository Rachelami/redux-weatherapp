import React, { useState, useEffect } from 'react'
import { OneDay, WeatherIcon } from '../../styled/dailyWeather'
import { Flex } from '../../styled/shared'
import { connect } from 'react-redux'

const DailyWeather = ({ dailyForecast, presentFahrenheit, isDark }) => {
    const [day, setDay] = useState([])
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        const date = new Date(dailyForecast.Date)
        const day = date.getDay()
        setDay(daysInWeek[day])
    }, [])

    return (
        <OneDay dark={isDark.isDark}>
            <WeatherIcon src={process.env.PUBLIC_URL + `/images/weather-icons/${dailyForecast.Day.Icon}.svg`} />
            <Flex>
                <div>{Math.round(dailyForecast.Temperature.Minimum.Value)}&deg;{presentFahrenheit ? 'F' : 'C'} -</div>
                <div>&nbsp;{Math.round(dailyForecast.Temperature.Maximum.Value)}&deg;{presentFahrenheit ? 'F' : 'C'}</div>
            </Flex>
            <div>{day}</div>
        </OneDay>
    )
}

const mapStateToProps = state => {
    return {
      isDark: state.isDark
    }
  }
  
  export default connect(
    mapStateToProps,
  )(DailyWeather)