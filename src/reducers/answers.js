const initialState = {
  rightAnswers: 0,
  totalAnswers: 0,
  streaks: 0,
  level: 1,
  dogLoveLevel: 'Dog liker',
  allrightAnswers: 0,
  alltotalAnswers: 0,
}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CORRECT_ANSWER':
      return {
        ...state,
        rightAnswers: state.rightAnswers + 1,
        totalAnswers: state.totalAnswers + 1,
        streaks: state.streaks + 1,
        allrightAnswers: state.allrightAnswers + 1,
        alltotalAnswers: state.alltotalAnswers + 1,
      }
    case 'WRONG_ANSWER':
      return {
        ...state,
        totalAnswers: state.totalAnswers + 1,
        streaks: 0,
        alltotalAnswers: state.alltotalAnswers + 1,
      }
    case 'LEVEL_UP':
      return {
        ...state,
        streaks: 0,
        level: state.level + 1
      }
    case 'RESET_ANSWERS':
      return {
        ...state,
        rightAnswers: 0,
        totalAnswers: 0,
        streaks: 0,
        level: 1,
      }
    case 'DOG_LOVE_LEVEL_UP':
      return {
        ...state,
        dogLoveLevel: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;