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

export const initThreeBreeds = (breeds) => {
  return {
      type: "INIT_THREE_BREEDS",
      payload: breeds
  }
}

export const addMoreBreeds = (breeds) => {
  return {
    type: 'ADD_MORE_BREEDS',
    payload:breeds
  }
}


