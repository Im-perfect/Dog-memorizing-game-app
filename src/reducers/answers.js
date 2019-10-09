const initialState = {
  rightAnswers: 0,
  totalAnswers: 0,
  streaks: 0,
  level: 0
}
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'CORRECT_ANSWER':
        return {...state, 
          rightAnswers: state.rightAnswers + 1,
          totalAnswers: state.totalAnswers + 1,
          streaks: state.streaks + 1
        }
      case 'WRONG_ANSWER':
        return {...state,
          totalAnswers: state.totalAnswers + 1,
          streaks: 0  
        }
      case 'LEVEL_UP':
        return {...state,
          totalAnswers: state.totalAnswers + 1,
          streaks: 0,
          level: state.level +1
        }
      default:
        return state;
    }
  };
  
  export default reducer;