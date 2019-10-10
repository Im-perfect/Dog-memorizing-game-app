import {combineReducers} from 'redux'
import dogbreeds from './dogbreeds'
import currentBreeds from './currentBreeds'
import answers from './answers'
import seenBreeds from './seenBreeds'
import isFirstSeen from './firstSeen'
import userName from './userName'

export default combineReducers({
    dogbreeds,
    currentBreeds,
    answers,
    seenBreeds,
    isFirstSeen,
    userName
})