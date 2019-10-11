import {combineReducers} from 'redux'
import dogbreeds from './dogbreeds'
import currentBreeds from './currentBreeds'
import answers from './answers'
import firstSeen from './firstSeen'
import userName from './userName'

export default combineReducers({
    dogbreeds,
    currentBreeds,
    answers,
    firstSeen,
    userName
})