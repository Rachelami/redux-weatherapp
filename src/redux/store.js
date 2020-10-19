import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
sagaMiddleware.run(rootSaga)

// store.dispatch({type: 'BOO'})

export default store