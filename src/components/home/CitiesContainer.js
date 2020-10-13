import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CityStrip from './CityStrip'
import FavoriteCityDetails from '../favorite/FavoriteCityDetails'
import Toast from '../Toast'

function CitiesContainer({ cities, presentFahrenheit, favoriteCity }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [showFavoriteCard, setShowFavoriteCard] = useState(false)

    useEffect(() => {
        if (cities.error) {
            setErrorMessage(cities.error)
        }
    }, [cities])

    useEffect(() => {
        if (favoriteCity.favoriteCity === undefined || favoriteCity.favoriteCity.length == 0) {
            setShowFavoriteCard(false)
        }
        else {
            setShowFavoriteCard(true)
        }
    },[favoriteCity])

    return (
        <>
            {showFavoriteCard ?
                <FavoriteCityDetails presentFahrenheit={presentFahrenheit} /> :
                <div>{
                    cities.cities &&
                    cities.cities.map((city) =>
                        <CityStrip key={city.Key} city={city} presentFahrenheit={presentFahrenheit} />
                    )}
                </div>}
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        favoriteCity: state.favoriteCity,
    }
}

export default connect(
    mapStateToProps,
)(CitiesContainer)