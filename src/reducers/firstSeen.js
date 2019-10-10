const initialState = {
  isFirstSeen: true,
  seenBreeds: []    
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "IS_FIRST_SEEN":
      return { ...state, isFirstSeen: action.payload };
    case "UPDATE_SEEN_BREEDS":
      return { ...state, seenBreeds: [...state.seenBreeds, action.payload] };
    case "RESET_FIRST_SEEN":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
