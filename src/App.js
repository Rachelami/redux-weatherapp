import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom"
import './style/mainStyle.css'
import './style/favorite.css'
import './style/homePage.css'
import Toggle from './components/home/Toggle'
import TopNavbar from './components/Navbar.js'
import Favorite from './components/favorite/Favorite'
import Search from './components/home/Search'
import CitiesContainer from './components/home/CitiesContainer'

function App() {
  const [presentFahrenheit, setPresentFahrenheit] = useState(false)

  const changeToggle = (isChecked) => {
    setPresentFahrenheit(isChecked)
  }

  return (

    <div className="App">
      <TopNavbar />
      <Toggle changeToggle={changeToggle} />

      <Switch>
        <Route exact path="/">
          <Search />
          <CitiesContainer presentFahrenheit={presentFahrenheit} />
        </Route>

        <Route exact path="/favorite">
          <Favorite presentFahrenheit={presentFahrenheit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
