import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { removeFromFavorite } from '../../redux/getFavorite/getFavoriteActions'
import { setFavoriteCity } from '../../redux/getFavoriteCity/getFavoriteCityActions'
import Toast from '../Toast'

const FavoriteCard = ({ cityWeatherInfo, weather, favorites, presentFahrenheit }) => {
    const [showCard, setShowCard] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        favorites.favorites.map(favoriteCity => {
            if (favoriteCity.Key === cityWeatherInfo.Key) {
                setShowCard(true)
            }
        })
    }, [])

    useEffect(() => {
        if (weather.error) {
            setErrorMessage(weather.error)
        }
    },[weather])

    const favorite = () => {
        dispatch(removeFromFavorite(cityWeatherInfo.Key))
        setShowCard(false)
    }

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const goToMainPage = () => {
        dispatch(setFavoriteCity(cityWeatherInfo))
    }

    return (
        <>
            {showCard &&
                <Card>
                    <img src={process.env.PUBLIC_URL + '/images/yellow-star.png'} className="favorite-logo-in-card" onClick={() => favorite()} />
                    <Card.Body>
                        <Card.Title>{capitalize(cityWeatherInfo.locationName)}</Card.Title>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + `/images/weather-icons/${cityWeatherInfo.WeatherIcon}.svg`} className="favorite-temp-logos" />
                        {presentFahrenheit? 
                        <Card.Text>{Math.round(cityWeatherInfo.Temperature.Imperial.Value)}&deg;F</Card.Text>:
                        <Card.Text>{Math.round(cityWeatherInfo.Temperature.Metric.Value)}&deg;C</Card.Text>}
                        <Link to="/" onClick={() => goToMainPage()}>See Forcast</Link>
                    </Card.Body>
                </Card >
            }
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}


const mapStateToProps = state => {
    return {
        weather: state.weather,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()),
        removeFromFavorite: () => dispatch(removeFromFavorite()),
        setFavoriteCity: () => dispatch(setFavoriteCity()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteCard)