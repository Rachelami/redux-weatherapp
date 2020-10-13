import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

const TopNavbar = (favoriteCity) => {
    const [isFavoritePageActive, setIsFavoritePageActive] = useState(false)

    useEffect(() => {
        if (window.location.href.includes("favorite")) {
            setIsFavoritePageActive(true)
        }
        else {
            setIsFavoritePageActive(false)
        }
    },[favoriteCity])

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

    return (
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link onClick={() => openPage("/")} className={isFavoritePageActive ? null : "active"}>
                    <img src={isFavoritePageActive ? process.env.PUBLIC_URL + '/images/house.png' : process.env.PUBLIC_URL + '/images/red-house.png'} className="nav-logos" />
                    Home
                </Nav.Link>

                <Nav.Link onClick={() => openPage("/favorite")} className={isFavoritePageActive ? "active" : null}>
                    <img src={isFavoritePageActive ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="nav-logos" />
                Favorite
                </Nav.Link>
            </Nav>

            <Form inline>
                <img className="herolo-logo" src={process.env.PUBLIC_URL + "/images/herolo.png"} />
            </Form>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        favoriteCity: state.favoriteCity
    }
}

export default connect(
    mapStateToProps,
)(TopNavbar)