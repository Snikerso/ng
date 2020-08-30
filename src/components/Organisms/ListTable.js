import React from 'react';
import styled from 'styled-components';
import { BsDashCircleFill } from "react-icons/bs";
import {ButtonDelete,ButtonEdit,ButtonDeleteMini,ButtonAction} from 'components/Atoms/Buttons'
import {SvgDelete} from 'components/Atoms/Svgs'


const Styled = styled.div`
   width:95%;
`
const StyledWrapperListHead = styled.div`
    display:grid;
    justify-content:space-around;
    align-items:center;
    justify-items:center;
    align-content:center;
    width:100%;
    height:50px;
    border-radius: 20px;
    margin-top:20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.theme.first};
    color:white;
`
const StyledWrapper = styled.div`
        background-color:${props=>props.theme.grey};
        padding:10px;
        border-radius: 20px;
        margin-top:20px;
    `
const StyledWrapperList = styled.div`
    display:grid;
    justify-content:space-around;
    align-items:center;
    justify-items:center;
    align-content:center;
    color:${props=>props.theme.first};
    background-color:${props=>props.theme.white};
    width:100%;
    border-radius: 20px;
    margin-top:20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    `
const StyledWrapperButtonWithText = styled.div`
    display:flex;
    align-items:center;
    button{
        margin-left:3px;
    }
    `
const StyledWrapperAction = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

const ListTable = ({
    type, 
    heads,
    rows,
    templateColums,
    handleEditUser,
    handleDeleteUser,
    handleDeleteDatabase,
    handleDeleteDatabaseUser,
    handleValidate,
    handleDeleteGame,
    handleTestRun,
    handleStartGame,
    }) =>{


    if (type==='GAMES'){
        return(
            <>
            <StyledWrapperListHead style={{gridTemplateColumns:templateColums}} >
                    {heads.map(headItem => {
                        return(
                            <p>{headItem}</p>
                        )
                    })}
            </StyledWrapperListHead> 
            {
                rows.map(item => {
                    return(
                        <StyledWrapperList 
                            style={{gridTemplateColumns:templateColums}} 
                            key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.executablePath}</p>
                            <p>{item.gameType}</p>
                            <ButtonEdit  value={item.name} type='button' onClick={(e)=>handleStartGame(item.name,e,rows)}>Start The Game</ButtonEdit> 
                                
                            <StyledWrapperAction>
                                <ButtonAction onClick={() => handleDeleteGame(item)}>Delete</ButtonAction>
                                <ButtonAction  onClick={() => handleValidate(item)}>Validate</ButtonAction >
                                <ButtonAction  onClick={() => handleTestRun(item)}>Test Run</ButtonAction >
                            </StyledWrapperAction>
                        </StyledWrapperList>   
                    )
                })
            }
        </>
        )
    }
    if (type==='BIGDATABASE'){
        return(
            <>
            <Styled>
                <StyledWrapperListHead 
                    style={{gridTemplateColumns:templateColums}} >
                    {heads.map(headItem => {
                            return(
                                <p>{headItem}</p>
                            )
                        })}

                </StyledWrapperListHead >  
                <StyledWrapper>
                    {rows.map(participant=>
                        participant.participants.map(item =>{

                              
                            return(
                                <StyledWrapperList 
                                    style={{gridTemplateColumns:templateColums}}
                                    key={item.code}>
                                        <p>{item.code}</p>
                                        <p>{item.gender}</p>
                                        <p>{item.age}</p>
                                        <p>{participant.experimentName}</p>
                                        <ButtonEdit>Dataview (all dataviews)</ButtonEdit>
                                        <ButtonEdit>Import (this data)</ButtonEdit>
                                </StyledWrapperList> 
                            )}) )}  

                            </StyledWrapper>
                </Styled>
                </>
        )
    }

    if (type==='EXPERIMENTS'){
        return(
            <>
            <Styled>
                <StyledWrapperListHead 
                    style={{gridTemplateColumns:templateColums}} >
                    {heads.map(headItem => {
                            return(
                                <p>{headItem}</p>
                            )
                        })}

                </StyledWrapperListHead >  
                <StyledWrapper>
                    {rows.map(experiment=>
                        {

                              
                            return(
                                <StyledWrapperList 
                                    style={{gridTemplateColumns:templateColums}}
                                    key={experiment.experimentName}>
                                        <p>{experiment.experimentName}</p>
                                        <ButtonEdit>Dataview (all dataviews)</ButtonEdit>
                                        <ButtonEdit>Import (this data)</ButtonEdit>
                                </StyledWrapperList> 
                            )})}  

                            </StyledWrapper>
                </Styled>
                </>
        )
    }


    if (type==='USERS'){
        return(
            <>
                <StyledWrapperListHead 
                    style={{gridTemplateColumns:templateColums}} >
                    {heads.map(headItem => {
                            return(
                                <p>{headItem}</p>
                            )
                        })}

                </StyledWrapperListHead >  
                <StyledWrapper>
                    {rows.map(user=>{
                        return(
                        <StyledWrapperList style={{gridTemplateColumns:templateColums}} key={user.userName}>
                                <p>{user.userName}</p>
                                <p>{(user.databaseUser != null || user.databaseUser < 0) ?( 
                                    <StyledWrapperButtonWithText>
                                        <div> {user.databaseUser}</div> {user.hasDatabase === false && <ButtonDeleteMini onClick={(e)=>handleDeleteDatabaseUser(user,e,rows)}><SvgDelete/></ButtonDeleteMini>} 
                                    </StyledWrapperButtonWithText>):(<span>-</span>)}
                                </p>
                            <StyledWrapperButtonWithText>
                                {(user.databaseName != null || user.databaseName < 0) ? ( <><div> {user.databaseName}</div> <ButtonDeleteMini onClick={(e)=>handleDeleteDatabase(user,e,rows)}><SvgDelete/></ButtonDeleteMini> </>):( '-' )}
                            </StyledWrapperButtonWithText>
                                <div>
                                <ButtonEdit  value={user.userName} type='button' onClick={(e)=>handleEditUser(user.userName,e,rows)}>Edit</ButtonEdit>
                                </div>
                                <div>
                                <ButtonDelete onClick={()=>handleDeleteUser(user)}>Delete</ButtonDelete></div>
                        </StyledWrapperList> 
                                    )
                            })}  
                </StyledWrapper>
            </>
        )
    }


}
export default ListTable

