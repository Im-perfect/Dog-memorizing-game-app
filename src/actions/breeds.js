import * as request from 'superagent'
export const initBreeds = (breeds) => {
    return {
        type: 'INIT_BREEDS',
        payload: breeds
    }
}
export function getBreeds() {
    return function (dispatch,setState) {
      request('https://dog.ceo/api/breeds/list/all')
        .then(response => {
          dispatch(initBreeds(Object.keys(response.body.message)))
        })
        .catch(err => console.log(err))
    }
}

export const setCurrentImage = (imgUrl) => {
    return{
        type:'SET_CURRENT_IMAGE',
        payload: imgUrl
    }
}

export function getRandomImageOf(breed) {
    return function (dispatch,setState) {
      request(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
          dispatch(setCurrentImage(response.body.message))
        })
        .catch(err => console.log(err))
    }
}