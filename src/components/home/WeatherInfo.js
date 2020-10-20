import React from 'react'
import { Wrapper, WeatherWrapper, WeatherIcon } from '../../styled/weatherInfo'
import { Flex, FiveDaysContainer } from '../../styled/shared'
import DailyWeather from './DailyWeather'
import { connect } from 'react-redux'

const Weatherinfo = ({ fiveDaysForecasts, weather, presentFahrenheit, isDark }) => {

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <Wrapper dark={isDark.isDark}>
            <WeatherWrapper>
                <Flex>
                    <WeatherIcon src={process.env.PUBLIC_URL + `/images/weather-icons/${weather.WeatherIcon}.svg`} />
                    <div>{capitalize(weather.WeatherText)}</div>
                </Flex>
                {presentFahrenheit ?
                    <div>{Math.round(weather.Temperature.Imperial.Value)}&deg;F</div> :
                    <div>{Math.round(weather.Temperature.Metric.Value)}&deg;C</div>
                }
            </WeatherWrapper>

            <FiveDaysContainer>
                {fiveDaysForecasts &&
                    fiveDaysForecasts.fiveDaysForecasts.DailyForecasts &&
                    fiveDaysForecasts.fiveDaysForecasts.DailyForecasts.map((dailyForecast) => (
                        <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                    ))
                }
            </FiveDaysContainer>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
      isDark: state.isDark
    }
  }
  
  export default connect(
    mapStateToProps,
  )(Weatherinfo)