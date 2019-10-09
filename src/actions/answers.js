export const correctAnswer = () => {
    return {
        type: 'CORRECT_ANSWER',
    }
}

export const wrongAnswer = () => {
    return {
        type: 'WRONG_ANSWER'
    }
}

export const resetAnswer = () => {
    return {
        type: 'RESET_ANSWER'
    }
}