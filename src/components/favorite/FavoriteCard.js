import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { CityContext } from '../CityContext'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { handleFavorites } from '../../redux/getFavorite/getFavoriteActions'

const FavoriteCard = ({ cityWeatherInfo, weatherData, favoriteCity, favorites }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    const [currentWeatherIsFetched, setcurrentWeatherIsFetched] = useState(false)
    const [cityContext, setCityContext] = React.useContext(CityContext)

    const dispatch = useDispatch()

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    useEffect(() => {
        dispatch(fetchcurrentWeather(cityWeatherInfo.Key))
        setcurrentWeatherIsFetched(true)
    }, [])



    useEffect(() => {
        if (!isFavorite) {
            const cityIndex = favorites.favorites.indexOf(favoriteCity)
            favorites.favorites.splice(cityIndex, 1);
        }
        dispatch(handleFavorites(favorites.favorites))

    }, [isFavorite])


    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            {weatherData.currentWeather[0] &&
                <Card>
                    <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo-in-card" onClick={() => favorite()} />
                        <Card.Body>
                            <Card.Title>{capitalize(cityWeatherInfo.LocalizedName)}</Card.Title>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + `/images/weather-icons/${weatherData.currentWeather[0].WeatherIcon}.svg`} className="favorite-temp-logos" />
                            <Card.Text>{Math.round(weatherData.currentWeather[0].Temperature.Metric.Value)}&deg;C</Card.Text>
                            {/* <Link to="/" onClick={() => goToMainPage()}>See Forcast</Link> */}
                        </Card.Body>
                </Card >
            }
        </>
    )
}


const mapStateToProps = state => {
    return {
        weatherData: state.weather,
        favorites: state.favorites

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()),
        handleFavorites: () => dispatch(handleFavorites())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteCard)