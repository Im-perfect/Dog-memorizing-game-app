const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case 'CORRECT_ANSWER':
        return [...state,true]
      case 'WRONG_ANSWER':
        return [...state,false]
      default:
        return state;
    }
  };
  
  export default reducer;