function reducerAuth(state, action) {

    switch (action.type) {
      case 'LOGOUT':

        return action.initLogout
        
      case 'LOGIN':

        return action.data
        
      case 'CREATE_USER':
        return {
          ...state,
        }
      default:
        throw new Error();
    }
  }
  
  
  export default reducerAuth