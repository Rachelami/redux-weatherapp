import React, { useEffect, useState } from 'react'
import { Card, Header, DayNight, MiddleWrapper } from '../../styled/favoriteCityDetails'
import { FiveDaysContainer, Star, WeatherIcon } from '../../styled/shared'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchfiveDaysForecastsRequest } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { deleteFavorite } from '../../redux/getFavorite/getFavoriteActions'
import DailyWeather from '../home/DailyWeather'
import Toast from '../Toast'


const FavoriteCityDetails = ({ presentFahrenheit, favoriteCity, fiveDaysForecasts, isDark }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isFavorite, setIsFavorite] = useState(true)
    const dispatch = useDispatch()
    const cityCard = favoriteCity.favoriteCity

    useEffect(() => {
        if (fiveDaysForecasts.error) {
            setErrorMessage(fiveDaysForecasts.error)
        }
    }, [fiveDaysForecasts])

    useEffect(() => {
        dispatch(fetchfiveDaysForecastsRequest(cityCard.Key, presentFahrenheit))
    }, [presentFahrenheit])

    const favorite = () => {
        setIsFavorite(false)
        dispatch(deleteFavorite(cityCard.Key))
    }

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            {isFavorite &&
                <Card dark={isDark.isDark}>
                    <Header>
                        <DayNight src={cityCard.IsDayTime ? process.env.PUBLIC_URL + '/images/day.gif' : process.env.PUBLIC_URL + '/images/night.gif'} />
                        <Star favoriteCityDetails src={process.env.PUBLIC_URL + '/images/yellow-star.png'} onClick={() => favorite()} />
                    </Header>
                    <MiddleWrapper>
                        <h2>{capitalize(cityCard.locationName)}</h2>
                        <WeatherIcon src={process.env.PUBLIC_URL + `/images/weather-icons/${cityCard.WeatherIcon}.svg`} />
                    </MiddleWrapper>

                    {presentFahrenheit ?
                        <h4>{Math.round(cityCard.Temperature.Imperial.Value)}&deg;F</h4> :
                        <h4>{Math.round(cityCard.Temperature.Metric.Value)}&deg;C</h4>
                    }

                    <FiveDaysContainer>
                        {fiveDaysForecasts &&
                            fiveDaysForecasts.fiveDaysForecasts.DailyForecasts &&
                            fiveDaysForecasts.fiveDaysForecasts.DailyForecasts.map((dailyForecast) => (
                                <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                            ))
                        }
                    </FiveDaysContainer>
                </Card>
            }
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        favoriteCity: state.favoriteCity,
        fiveDaysForecasts: state.fiveDaysForecasts, 
        isDark: state.isDark
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchfiveDaysForecastsRequest: () => dispatch(fetchfiveDaysForecastsRequest()),
        deleteFavorite: () => dispatch(deleteFavorite())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteCityDetails)