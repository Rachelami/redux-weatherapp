import React, { useState } from 'react'
import './style/mainStyle.css'
import { AppWrap } from './styled/app'
import { Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import Toggle from './components/home/Toggle'
import TopNavbar from './components/Navbar.js'
import Favorite from './components/favorite/Favorite'
import Search from './components/home/Search'
import CitiesContainer from './components/home/CitiesContainer'

function App({ isDark }) {
  const [presentFahrenheit, setPresentFahrenheit] = useState(false)
  const checkToggle = (isChecked) => {
    setPresentFahrenheit(isChecked)
  }

  return (

    <AppWrap dark={isDark.isDark}>
      <TopNavbar />
      <Toggle changeToggle={checkToggle} />

      <Switch>
        <Route exact path="/">
          <Search />
          <CitiesContainer presentFahrenheit={presentFahrenheit} />
        </Route>

        <Route exact path="/favorite">
          <Favorite presentFahrenheit={presentFahrenheit} />
        </Route>
      </Switch>
    </AppWrap>
  );
}

const mapStateToProps = state => {
  return {
    isDark: state.isDark
  }
}

export default connect(
  mapStateToProps,
)(App);
