import React, {useState,useReducer,useEffect,useContext} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {useFormik} from 'formik';
import {HeadPage} from 'components/Atoms/Heads'
import {ButtonCreate} from 'components/Atoms/Buttons'
import {Input} from 'components/Atoms/Inputs'
import ListTable from 'components/Organisms/ListTable'
import GameStartItem from 'components/Organisms/GameStartItem'
import contextGames from 'contexts/contextGames';
import reducerSession from 'reducers/reducerSession';

const StyledWrapper= styled.div`
  display:flex;
  flex-direction:column;
  padding:30px;
  background: #FFFFFF;
  width:90%;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  box-shadow: 6px 7px 62px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  button{
    align-self: center;
  }
`
const StyledWrapperSortButtons = styled.div`
  display:grid;
  justify-content:center;
  width:300px;
  grid-template-columns:1fr 1fr ;
  gap:10px;
  text-align:center;
`
const StyledWrapperInner = styled.div`
  display:flex;
  justify-content:flex-end;
  width:100%;

`
const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-items:center;
  width:100%;
  
  h2{
    align-self:flex-start;
    color:  ${props=> props.theme.first}
    
  }
  button{
    margin-top:30px;
  }

`
const StyledFormInner = styled.div`
  display:flex;
  align-items:center;
  align-content:space-between;
  justify-content:space-between;

  width:80%;
  label{
    margin-right:30px;
  }
  >*{
    margin-top:20px;
  }
`

const initSession =   
{
    experimentName:'',
    participantCode:'',
  }


const handleValidate= (item)=>{

  fetch("/api/Game/Validate", {
    method: 'POST',
    credentials: 'include',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cookie' : document.cookie },
    body:JSON.stringify(item)
  })
    .then((res) =>{if(res.ok == true) {alert("Validation Success")}else {alert("Validation bad. Try change Executable Path")}  } )

}
const handleTestRun = (item)=>{

  fetch("/api/Game/StartGame", {
    method: 'POST',
    credentials: 'include',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cookie' : document.cookie },
    body:JSON.stringify(item)
  })
    .then((res) =>console.log(res))
    .catch(err => console.log(err))

}
const handleDeleteGame = (item)=>{

  fetch("/api/Game/Delete", {
    method: 'POST',
    credentials: 'include',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cookie' : document.cookie },
    body:JSON.stringify(item)
  })
    .then((res) =>console.log(res))
    .catch(err => console.log(err))

}
const handleAddGame = (values) =>{
  fetch("/api/Game/Add", {
    method: 'POST',
    credentials: 'include',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cookie' : document.cookie },
    body:JSON.stringify(values)
  })
    .then((res) =>console.log(res))
    .catch(err => console.log(err))
}



function Game() {
  const {stateGames} = useContext(contextGames)
  const [modalCreateUser,setModalCreateUser] = useState(false)
  const [modalEditUser,setModalEditUser] = useState(false)
  const [modalList,setModalList] = useState([])

  const [sessionData, dispatchSessionData] =useReducer(reducerSession,initSession)
  console.log(sessionData)
  useEffect(()=>{
      fetch("/api/Session/Get", {
          method: 'GET',
          credentials: 'include',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
      })
          .then(res => res.json())
          .then(data =>dispatchSessionData({type:'INIT',data}))
          
  },[])


  const formikAddGame = useFormik({
    
    initialValues:{
      name: "", 
      id:0,
      args:'',
      gameType:"",
      executablePath: "", 
    },

    onSubmit:values => {
      handleAddGame(values,setModalCreateUser)
      
    }
  })


  const handleStartGame = (name,e ,data) =>{
    
    const modal = data.filter(item=>item.name === name)
    console.log(modal)
    setModalEditUser(true)
    setModalList(modal)
  }

  return (
    <>     
        <HeadPage head={"GAMES"} subHead={'Game Menager'} />
        <StyledWrapper>
            <StyledWrapperInner>
              <ButtonCreate text={'ADD GAME'} handleCreate={() => setModalCreateUser(true)}/>
            </StyledWrapperInner>

            <ListTable 
                type='GAMES'
                heads={['NAME', ' EXECUTABLE PATH','GAME TYPE',"START EXPERIMENT", 'ACTIONS']} 
                templateColums={'10% 40% 10% 15% 30%'}
                rows={stateGames}
                handleValidate={handleValidate}
                handleTestRun={handleTestRun}
                handleDeleteGame={handleDeleteGame}
                handleStartGame={handleStartGame}/>
                
              {modalList.map(item=> {
                return(
                  <GameStartItem key={item.userName} sessionData={sessionData} item={item} modalEditUser={modalEditUser} setModalEditUser={setModalEditUser} />
                        )})}

          <Modal
                ariaHideApp={false}
                isOpen={modalCreateUser}
                onRequestClose={() => setModalCreateUser(false)}
                style={{
                    overlay: {
                        oppacity: 0.99,
                    },
                    content: {
                        border: '4px solid #C4C4C4',
                        width: '35%',
                        height: '35%',
                        margin: 'auto auto',
                        background: 'white',
                        boxShadow: '0px 4px 6px #00000029',
                        borderRadius: '18px',
                    }
                    
                }}
            >
              <StyledForm onSubmit={formikAddGame.handleSubmit}>
                <h2>CreateUser</h2>
                <StyledFormInner> 
                  <label>NAME</label>
                  <Input
                    name='name'
                    onChange={formikAddGame.handleChange}
                    values={formikAddGame.values.name}/>
                </StyledFormInner>
                <StyledFormInner>

                  <label>EXECUTABLE PATH</label>
                  <Input
                    name='executablePath'
                    onChange={formikAddGame.handleChange}
                    values={formikAddGame.values.executablePath} />
                </StyledFormInner>
                
                <StyledFormInner>
                <label>GAME TYPE</label>
                  <select onChange={formikAddGame.handleChange} value={formikAddGame.values.gameType} name="gameType">
                        <option value={0}>Unspecified</option>
                        <option value={1}>Reinforcement Learning</option>
                        <option value={2}>Operational Memory</option>
                        <option value={3}>Spatial Memory</option>
                  </select>
                </StyledFormInner>
                <StyledWrapperInner>
                <ButtonCreate text={'ADD'} type='submit' onClick={()=>handleAddGame(formikAddGame.values)}/>
              
                </StyledWrapperInner>
                </StyledForm>

            </Modal>

          

        </StyledWrapper>
    </>
  );
}

export default Game;
