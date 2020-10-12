import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
import CityName from './CityName'
import Toast from '../Toast'

function CitiesContainer({ cities, presentFahrenheit }) {
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (cities.error) {
            setErrorMessage(cities.error)
        }
    })

    return (
            <div>
                <div>{
                    cities.cities &&
                    cities.cities.map((city) =>
                        <CityName key={city.Key} city={city} presentFahrenheit={presentFahrenheit} />
                    )}
                </div>
                {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
            </div>
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesContainer)