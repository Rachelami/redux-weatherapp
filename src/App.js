import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom"
import './style/mainStyle.css'
import Toggle from './components/home/Toggle'
import TopNavbar from './components/Navbar.js'
import Favorite from './components/favorite/Favorite'
import Search from './components/home/Search'
import CitiesContainer from './components/home/CitiesContainer'
import { AppWrap } from './styled/app'

function App() {
  const [presentFahrenheit, setPresentFahrenheit] = useState(false)

  const checkToggle = (isChecked) => {
    setPresentFahrenheit(isChecked)
  }

  return (

    <AppWrap>
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

export default App;
