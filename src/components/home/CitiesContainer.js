import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
import CityName from './CityName'

function CitiesContainer({ citiesData, fetchCities }) {

    // useEffect(() => {
    //     fetchCities()
    // }, [])

    return (
        // citiesData.loading ? <h2>Loading...</h2> :
            citiesData.error ? <h2>{citiesData.error}</h2> :
                <div>
                    <h2>Cities List</h2>
                    <div>{
                        citiesData.cities &&
                        citiesData.cities.map((city) =>
                            <CityName key={city.Key} city={city}/>
                        )}
                    </div>
                </div>
    )
}

const mapStateToProps = state => {
    return {
        citiesData: state.cities,
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