export const isFirstSeen = (boolean) => {
    return {
      type: 'IS_FIRST_SEEN',
      payload:boolean
    }
  }

export const updateSeenBreeds = (breed) => {
    return {
      type: 'UPDATE_SEEN_BREEDS',
      payload:breed
    }
  }
  
  export const resetFirstSeen = () => {
    return {
      type: 'RESET_FIRST_SEEN'
    }
  }