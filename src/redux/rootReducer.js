import { combineReducers } from 'redux'
import citiesReduser from './getCity/getCityReducer' //userReduser change name

const rootReducer = combineReducers({ 
    cities: citiesReduser
})

export default rootReducer