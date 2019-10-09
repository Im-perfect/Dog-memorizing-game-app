const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case 'INIT_THREE_BREEDS':
        return [...action.payload]
      case 'ADD_MORE_BREEDS':
        return [...state, ...action.payload]
      default:
        return state;
    }
  };
  
  export default reducer;