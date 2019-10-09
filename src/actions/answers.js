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

export const levelUp = () => {
    return {
        type: 'LEVEL_UP'
    }
}

export const resetAnswers = () => {
    return {
        type: 'RESET_ANSWERS'
    }
}