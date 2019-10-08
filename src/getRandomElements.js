
const getRandomElements = (array,n) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0,n)
}

export default getRandomElements