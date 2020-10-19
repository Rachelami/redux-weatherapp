import React, { useState, useEffect } from 'react'
import { FormControl } from 'react-bootstrap'
import {Wrapper, MagnifyingGlass, Input} from '../../styled/search'
import { fetchCities, fetchCitiesRequest } from '../../redux/getCity/getCityActions'
import { resetFavoriteCity } from '../../redux/getFavoriteCity/getFavoriteCityActions'
import { useDispatch } from 'react-redux'
import Toast from '../Toast'
import { connect } from 'react-redux'

const Search = () => {
    const [input, setInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (input !== '')
            // DONE - dispatch(fetchCities(input))
            dispatch(fetchCitiesRequest(input))
    }, [input])

    const handleChange = (event) => {
        if (verifyInput(event.target.value)) {
            setInput(event.target.value)
            // dispatch(resetFavoriteCity())
        } else {
            setErrorMessage('Invalid Character')
        }
    }

    const verifyInput = (input) => {
        const acceptedCharacters = /^[A-Za-z\s]+$/
        if (input.match(acceptedCharacters) || !input) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <>
            <Wrapper>
                <Input type="text" placeholder="Search" value={input} onChange={handleChange} />
                <MagnifyingGlass src={process.env.PUBLIC_URL + '/images/magnifying-glass.png'} />
            </Wrapper>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCitiesRequest: () => dispatch(fetchCitiesRequest())
})

export default connect(
    mapDispatchToProps
)(Search)
