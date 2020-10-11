import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CityContext } from '../CityContext'

const FavoriteCard = ({ cityWeatherInfo }) => {
    const [isFavorite, setIsFavorite] = useState(true)
    const [cityContext, setCityContext] = React.useContext(CityContext)

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    const goToMainPage = () => {
        setCityContext(cityWeatherInfo)
    }

    useEffect(() => {
        setCityContext('')
    }, [])

    // useEffect(() => {
    //     if (!isFavorite) {
    //         let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
    //         storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}
    //         delete storedFavoriteCities[`${cityName}`]
    //         localStorage.setItem('storedFavoriteCities', JSON.stringify(storedFavoriteCities))
    //     }
    // })

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

    return (
        <>
            {isFavorite &&
                <Card>
                    <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo-in-card" onClick={() => favorite()} />
                    <Card.Body>
                        <Card.Title>{capitalize(cityWeatherInfo.LocalizedName)}</Card.Title>
                        {/* <Card.Img variant="top" src={process.env.PUBLIC_URL + `/images/weather-icons/${cityWeatherInfo.WeatherIcon}.svg`} className="favorite-temp-logos" />
                        <Card.Text>{Math.round(cityWeatherInfo.Temperature.Metric.Value)}&deg;C</Card.Text>
                        <Link to="/" onClick={() => goToMainPage()}>See Forcast</Link> */}
                    </Card.Body>
                </Card >
            }
        </>
    )
}

export default FavoriteCard