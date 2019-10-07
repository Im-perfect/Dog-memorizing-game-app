import {combineReducers} from 'redux'
import dogbreeds from './dogbreeds'
import currentBreeds from './currentBreeds'

export default combineReducers({
    dogbreeds,
    currentBreeds
})