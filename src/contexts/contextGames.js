import {createContext} from 'react'

const gamesContext = createContext({
    stateGames:{},
    dispatchGames:{},
})

export default gamesContext