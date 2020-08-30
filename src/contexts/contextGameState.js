import {createContext} from 'react'

const contextGameState = createContext({
    stateSession:{},
    dispatchSession:{},
})

export default contextGameState