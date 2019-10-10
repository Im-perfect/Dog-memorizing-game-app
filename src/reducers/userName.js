import { ADD_NAME } from "../actions/addName";

const reducer = (state = 'Player One', action = {}) => {
  switch (action.type) {
    case ADD_NAME:
      if (action.payload === '') {
        return state
      } else {
        return state = action.payload;
      }
      
    default:
      return state;
  }
};

export default reducer