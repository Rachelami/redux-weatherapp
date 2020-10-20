import React, { useState, useEffect } from 'react'
import { Wrapper, MagnifyingGlass, Input } from '../../styled/search'
import { connect } from 'react-redux'
import { fetchCitiesRequest } from '../../redux/getCity/getCityActions'
import { resetFavoriteCity } from '../../redux/getFavoriteCity/getFavoriteCityActions'
import { useDispatch } from 'react-redux'
import Toast from '../Toast'

const Search = ({isDark}) => {
    const [input, setInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (input !== '')
            dispatch(fetchCitiesRequest(input))
    }, [input])

    const handleChange = (event) => {
        if (verifyInput(event.target.value)) {
            setInput(event.target.value)
            dispatch(resetFavoriteCity())
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
                <Input dark={isDark.isDark.toString()} type="text" placeholder="Search" value={input} onChange={handleChange} />
                <MagnifyingGlass src={process.env.PUBLIC_URL + '/images/magnifying-glass.png'} />
            </Wrapper>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
      isDark: state.isDark
    }
  }

const mapDispatchToProps = dispatch => ({
    fetchCitiesRequest: () => dispatch(fetchCitiesRequest())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
