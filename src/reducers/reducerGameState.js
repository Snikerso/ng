function reducerGameState(state, action) {

    switch (action.type) {
      case 'INIT':
        console.log(action)
        return action.data
      default:
        throw new Error();
    }
  }
  
  
  export default reducerGameState