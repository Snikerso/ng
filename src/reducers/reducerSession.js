function reducerSession(state, action) {

    switch (action.type) {
      case 'INIT':
        console.log(action)
        return action.data
      case 'LOGOUT':
        console.log(action)
        return action.initLogout
        
      case 'LOGIN':
        console.log(action.data)
        return action.data
        
      case 'CREATE_USER':
        return {
          ...state,
        }
      default:
        throw new Error();
    }
  }
  
  
  export default reducerSession