import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'

const TopNavbar = () => {
    const [isFavoritePageActive, setIsFavoritePageActive] = useState(false)

    useEffect(() => {
        if (window.location.href.includes("favorite")) {
            setIsFavoritePageActive(true)
        } 
        else {
            setIsFavoritePageActive(false)
        }
    })

    return (
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link href="/" className={isFavoritePageActive ? null : "active"}>
                    <img src={isFavoritePageActive ? process.env.PUBLIC_URL + '/images/house.png' : process.env.PUBLIC_URL + '/images/red-house.png'} className="nav-logos" />
                    Home
                </Nav.Link>

                <Nav.Link href="/favorite" className={isFavoritePageActive ? "active" : null}>
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

export default TopNavbar