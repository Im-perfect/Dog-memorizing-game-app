const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "UPDATE_SEEN_BREEDS":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
