import {combineReducers} from 'redux'
import dogbreeds from './dogbreeds'
import currentBreeds from './currentBreeds'
import answers from './answers'
import currentImage from './currentImage'

export default combineReducers({
    dogbreeds,
    currentBreeds,
    answers,
    currentImage
})