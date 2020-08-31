import React,{useState,useEffect,useReducer} from 'react';
import styled from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import axios from 'axios';

import MainTemplate from 'components/Templates/MainTemplate'

import Home from './components/Pages/Home';
import Acount from './components/Pages/Acount';
import Login from './components/Pages/Login';
import Navigation from './components/Organisms/Navigation';
import HeadBar from './components/Organisms/HeadBar';
import LogoUmk from './components/Atoms/LogoUmk';
import LiveStreamMenager from './components/Pages/LiveStreamMenager';
import Game from './components/Pages/Game';
import GameMenager from './components/Pages/GameMenager';
import Users from './components/Pages/Users';
import Debug from './components/Pages/Debug';
import Experiments from './components/Pages/Experiments';
import Settings from './components/Pages/Settings';
import AdministratorPanel from './components/Pages/AdministratorPanel';
import BigDatabase from 'components/Pages/BigDatabase';

import contextExperiments from './contexts/contextExperiments';
import contextGames from './contexts/contextGames';
import reducerExperiments from 'reducers/reducerExperiments';


import contextGameState from './contexts/contextGameState';
import contextAuth from './contexts/contextAuth';
import reducerAuth from 'reducers/reducerAuth';
import reducerGames from 'reducers/reducerGames';
import reducerGameState from './reducers/reducerGameState';


const StyledWrapper = styled.section`
  margin-left:300px;
  margin-top:11vh;
`

const initAuth =   
{
  "isAuthenticated":false,
  "userName":"",
  "databaseUser":"",
  "databaseName":"",
  "hasDatabase":false,
  "hasDatabaseAccount":false,
  "exposedClaims":{"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier":"","http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name":"","AspNet.Identity.SecurityStamp":"","http://schemas.microsoft.com/ws/2008/06/identity/claims/role":""}
}
const initExperiments =   
[
  {"experimentName":"",
    "participants":[{"code":"","gender":0,"age":0,"experimentName":""}],"taskNames":[""]},
]

function App() {

  const [stateAuth, dispatchAuth] = useReducer(reducerAuth, initAuth )
  const [stateExperiments, dispatchExperiments] = useReducer(reducerExperiments, initExperiments )
  const [stateGames, dispatchGames] = useReducer(reducerGames, initExperiments )
  const [stateGameState, dispatchGameState] = useReducer(reducerGameState, initExperiments )

    useEffect(() => {
      fetch("/api/Ath/UserInfo", {
          method: 'GET',
          credentials: 'include',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
      })
          .then(res => res.ok &&( res.json()))
          .then(data=>dispatchAuth({type:'LOGIN',data}))

      fetch("/api/database/GetExperimentsDetailed", {
          method: 'GET',
          credentials: 'include',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
      })
          .then(res => res.ok &&( res.json()))
          .then(data=>dispatchExperiments({type:'INIT',data}))

      fetch("/api/game/GetAll", {
          method: 'GET',
          credentials: 'include',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
      })
          .then(res => res.ok &&( res.json()))
          .then(data=>dispatchGames({type:'INIT',data}))
      fetch("/api/game/GetState", {
          method: 'GET',
          credentials: 'include',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
      })
          .then(res => res.ok &&( res.json()))
          .then(data=>dispatchGameState({type:'INIT',data}))

      }, [])
  
  return (
    <contextAuth.Provider value={{ stateAuth, dispatchAuth }} >
    <contextGameState.Provider value={{ stateGameState, dispatchGameState }} >
      <contextExperiments.Provider value={{ stateExperiments, dispatchExperiments }} >
        <contextGames.Provider value={{ stateGames, dispatchGames }} >

        <BrowserRouter>

          <MainTemplate>
            <HeadBar isAuthenticated={stateAuth.isAuthenticated}/>
              <StyledWrapper>
                {stateAuth.isAuthenticated ? (
                  <>
                    <Navigation/>
                    <Switch>
                        <Route  exact path='/' component={Home} />
                        <Route  path='/settings' component={Settings} />
                        <Route  path='/account' component={Acount} />
                        <Route  path='/livestream' component={LiveStreamMenager} />
                        <Route  path='/game' component={Game} />
                        <Route  path='/game-menager' component={GameMenager} />
                        <Route  path='/Users' component={Users} />
                        <Route  path='/debug' component={Debug} />
                        <Route  path='/big-database' component={BigDatabase} />
                        <Route  path='/experiments' component={Experiments} />
                        <Route  path='/admin' component={AdministratorPanel} />
                    </Switch>
                  </>
                  ):(
                  <>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                  </>

                 )
                }
                </StyledWrapper>
            </MainTemplate>

          </BrowserRouter>

          </contextGames.Provider>
          </contextExperiments.Provider>
        </contextGameState.Provider>
      </contextAuth.Provider>


  );
} 

export default App;
