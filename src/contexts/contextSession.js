import {createContext} from 'react'

const gameSession = createContext({
    stateSession:{},
    dispatchSession:{},
})

export default gameSession