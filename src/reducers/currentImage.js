const reducer = (state = '', action = {}) => {
    switch (action.type) {
        case 'SET_CURRENT_IMAGE':
            return action.payload
        default:
            return state
    }
}
export default reducer