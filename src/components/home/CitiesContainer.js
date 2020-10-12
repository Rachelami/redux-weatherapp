import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
import CityName from './CityName'
import Toast from '../Toast'

function CitiesContainer({ cities, fetchCities, presentFahrenheit }) {
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (cities.error) {
            setErrorMessage(cities.error)
        }
    })

    return (
        // cities.loading ? <h2>Loading...</h2> :
        cities.error ? <h2>{cities.error}</h2> :
            <div>
                <h2>Cities List</h2>
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