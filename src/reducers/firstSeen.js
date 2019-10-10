const reducer = (state = true, action = {}) => {
    switch (action.type) {
      case "IS_FIRST_SEEN":
        return action.payload;
  
      default:
        return state;
    }
  };
  
  export default reducer;
  