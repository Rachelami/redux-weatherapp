import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { CityContext } from '../CityContext'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { handleFavorites } from '../../redux/getFavorite/getFavoriteActions'

const FavoriteCard = ({ cityWeatherInfo, weatherData, favoriteCity, favorites, locationName }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    const [currentWeatherIsFetched, setcurrentWeatherIsFetched] = useState(false)
    const [aaaa, setaaaa] = useState(false)

    const dispatch = useDispatch()

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    // useEffect(() => {
    //     console.log(weatherData)
    // })

    // useEffect(() => {
    //     dispatch(fetchcurrentWeather(cityWeatherInfo.Key, cityWeatherInfo.LocalizedName))
    //     // console.log("cityWeatherInfo.Key!!!!!!!!!!!!!!!!!!!!!!!!!")
    //     // console.log(weatherData)
    //     // console.log("weatherData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    // }, [])

    // useEffect(() => {
    //     if (!isFavorite) {
    //         const cityIndex = favorites.favorites.indexOf(favoriteCity)
    //         favorites.favorites.splice(cityIndex, 1);
    //     }
    //     dispatch(handleFavorites(favorites.favorites))

    // }, [isFavorite])


    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
                <Card>
                    <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo-in-card" onClick={() => favorite()} />
                        <Card.Body>
                            <Card.Title>{capitalize(cityWeatherInfo.locationName)}</Card.Title>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + `/images/weather-icons/${cityWeatherInfo.WeatherIcon}.svg`} className="favorite-temp-logos" />
                            <Card.Text>{Math.round(cityWeatherInfo.Temperature.Metric.Value)}&deg;C</Card.Text>
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