import {createContext} from 'react'

const authContext = createContext({
    stateAuth:{},
    dispatchAuth:{},
})

export default authContext