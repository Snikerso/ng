import React ,{useState,useReducer, useEffect} from 'react';
import Modal from 'react-modal';
import {useFormik} from 'formik';
import reducerSession from 'reducers/reducerSession';


const handleStartGame = (values) => {
    const {id,name,experimentName,gameType,executablePath,args,recordData,participantCode, taskName, sessionNumber, } = values
    console.log(values)
    const bodyStartGame = {
        id:id,
        name:name,
        gameType:gameType,
        executablePath:executablePath,
        args:args
    }
    const bodyStartRecordGame = {
        participantCode:participantCode,
        experimentName:experimentName,
        sessionNumber:sessionNumber,
        taskName:taskName,
        gameType:gameType,
    }

    console.log(values)
    fetch("/api/Game/StartGame", {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
        body:JSON.stringify(bodyStartGame),
    })
        .then(res => console.log(res))


    if(recordData === true) {
        fetch("/api/Game/StartRecordingData", {
            method: 'POST',
            credentials: 'include',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              'Cookie' : document.cookie },
            body:JSON.stringify(bodyStartRecordGame),
        })
            .then(res => console.log(res))
    }
}

const handleClaimControl = (claimControl,setClaimControl) =>{

    if(claimControl ===false) {
        fetch("/api/Game/ClaimControl", {
            method: 'POST',
            credentials: 'include',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              'Cookie' : document.cookie },
           
        })
            .then(res => res)
        setClaimControl(!claimControl)
        
    }
    else{
        fetch("/api/Game/RevokeControl", {
            method: 'POST',
            credentials: 'include',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              'Cookie' : document.cookie }
        })
            .then(res => {if(res.ok){return setClaimControl(!claimControl) }else{return alert('save or discard data')}})
        
    }

}
const handleStopGame = () =>{
    fetch("/api/Game/StopGame", {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
    })
        .then(res => console.log(res))
}
const handleSaveData = () =>{
    fetch("/api/Game/SaveData", {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
    })
        .then(res => console.log(res))
}


const handleDiscardData = () =>{
    fetch("/api/Game/DiscardData", {
        method: 'POST',
        credentials: 'include',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Cookie' : document.cookie },
    })
        .then(res => console.log(res))
}



function GameStartItem({item, sessionData, modalEditUser, setModalEditUser}) {

    const [claimControl , setClaimControl] = useState(false)
    const [tasks, setTasks] = useState()
    

    


    const formikStartGame = useFormik({

        initialValues:{
            id:item.id,
            name:item.name,
            experimentName:sessionData.experimentName,
            participantCode:sessionData.participantCode,
            recordData:true,
            args:'',
            taskName:'',
            gameType:item.gameType,
            executablePath: item.executablePath,
        },  
        onSubmit:values => {
            
          }
      })
      console.log(formikStartGame.values)
      useEffect(()=>{
        fetch(`/api/database/GetExperimentTasks?ExperimentName=${formikStartGame.values.experimentName}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              'Cookie' : document.cookie },
        })
            .then(res => res.json())
            .then(data =>setTasks(data))

            
            
    },[])
        return (
            <>
                <Modal
                        ariaHideApp={false}
                        isOpen={modalEditUser}
                        onRequestClose={() => setModalEditUser(false)}
                        style={{
                            overlay: {
                                oppacity: 0.20,
                            },
                            content: {
                                position:'absolute',
                                width: '600px',
                                height: '400px',
                                top:'50%',
                                left:'calc(50%)',
                                transform:'translate(-50%,-50%)',
                                border:' 4px solid blue',
                                margin: 'auto auto',
                                background: 'white',
                                boxShadow: '1px 9px 81px rgba(0, 0, 0, 0.25)',
                                borderRadius: '20px',

                            }
                        }}
                    >



                    {claimControl ? <button onClick={() => handleClaimControl(claimControl,setClaimControl)}>Revoke Control</button> : <button onClick={() => handleClaimControl(claimControl,setClaimControl)}>ClaimControl</button> }
                    
                    {claimControl && (
                        <form onSubmit={formikStartGame.handleSubmit}>
                            <h1>START GAME</h1>
                            
                            <div>
                                <label>EXPERIMENT NAME</label>
                                <h3>{sessionData.experimentName}</h3>
                            </div>
                            <div>
                                <label>PARTICIPANT CODE</label>
                                <h3>{sessionData.participantCode}</h3>
                            </div>
                            <div>
                                <label>TASK NAME</label>
                                <select onChange={formikStartGame.handleChange} value={formikStartGame.values.taskName} name='taskName'  >
                                   {tasks.map(item=>{
                                       return(
                                        <option value={item}>{item}</option>
                                       )
                                      
                                   })} 
                               
                                </select>
                            </div>
                            <div>
                                <label>SESSION NUMBER</label>
                                <input type="number"/>
                            </div>
                            <div>
                                <label>GAME TYPE</label>
                                {item.gameType}
                            </div>
                            <div>
                                <label>Record data</label>
                                <input type="checkbox"/>
                                
                            </div>
                            <div>
                                <label>Start live stream</label>
                                <input type="checkbox"/>
                            </div>


                            
                            <button></button>
                            <button onClick={()=>handleStartGame(formikStartGame.values)}>Start experiment</button>
                            <button onClick={() => handleStopGame()}>StopGame</button>

                            <button onClick={() => handleDiscardData()}>Discard Data</button>
                            <button onClick={() => handleSaveData()}>SaveData</button>

                        </form>


                    )}
                    

                </Modal>
        </>
  );
}

export default GameStartItem;