const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case 'INIT_THREE_BREEDS':
        return [...action.payload]
      default:
        return state;
    }
  };
  
  export default reducer;