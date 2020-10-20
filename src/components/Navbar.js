import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { NavLogos, HeroloLogo } from '../styled/navbar'
import { SwitchWrapper } from '../styled/toggle'
import { useHistory } from "react-router-dom"
import { useDispatch, connect } from 'react-redux'
import { setDarkView } from '../redux/darkView/darkViewActions'

const TopNavbar = ({ favoriteCity, isDark }) => {
    const [isFavoritePageActive, setIsFavoritePageActive] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (window.location.href.includes("favorite")) {
            setIsFavoritePageActive(true)
        }
        else {
            setIsFavoritePageActive(false)
        }
    }, [favoriteCity])

    const history = useHistory()

    const openPage = (path) => {
        history.push(path)
        if (path === "/favorite") {
            setIsFavoritePageActive(true)
        }
        else {
            setIsFavoritePageActive(false)
        }
    }

    const switchToDarkView = (event) => {
        dispatch(setDarkView(event.target.checked))
    }

    return (
        <Navbar bg={isDark.isDark ? 'dark' : 'light'} variant={isDark.isDark ? 'dark' : 'light'}>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => openPage("/")} className={isFavoritePageActive ? null : "active"}>
                    <NavLogos nav src={isFavoritePageActive ? process.env.PUBLIC_URL + '/images/house.png' : process.env.PUBLIC_URL + '/images/red-house.png'} />
                    Home
                </Nav.Link>

                <Nav.Link onClick={() => openPage("/favorite")} className={isFavoritePageActive ? "active" : null}>
                    <NavLogos nav src={isFavoritePageActive ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} />
                Favorite
                </Nav.Link>
            </Nav>

            <SwitchWrapper dark>
                <NavLogos src={isDark.isDark && process.env.PUBLIC_URL + "/images/sun.png"} />
                <Form>
                    <Form.Check
                        type="switch"
                        id="dark-view"
                        label=''
                        onChange={switchToDarkView}
                    />
                </Form>
                <NavLogos moon src={!isDark.isDark && process.env.PUBLIC_URL + "/images/moon.png"} />
            </SwitchWrapper>

            <Form inline>
                <HeroloLogo src={isDark.isDark ? process.env.PUBLIC_URL + "/images/herolo-light.png" : process.env.PUBLIC_URL + "/images/herolo.png"} />
            </Form>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        favoriteCity: state.favoriteCity,
        isDark: state.isDark
    }
}

const mapDispatchToProps = dispatch => ({
    setDarkView: () => dispatch(setDarkView())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNavbar)