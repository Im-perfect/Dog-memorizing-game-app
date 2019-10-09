import {combineReducers} from 'redux'
import dogbreeds from './dogbreeds'
import currentBreeds from './currentBreeds'
import answers from './answers'

export default combineReducers({
    dogbreeds,
    currentBreeds,
    answers,
})