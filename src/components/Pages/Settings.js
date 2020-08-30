import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import HeadPage from 'components/Atoms/HeadPage';



const StyledWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:90%;
    height:100%;
`;
const StyledWrapperUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    width: 240px;
    height: 190px;
    background-color:#EBC30D;
    filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.25));
    h3{
        color:white;
    }
`;
const StyledWrapperAdmin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    width: 240px;
    height: 190px;
    background-color:#0050AA;
    filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.25));
    h3{
        color:white;
    }
`;
const StyledWrapperDebug = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    width: 240px;
    height: 190px;
    background-color:#C4C4C4;
    filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.25));
    h3{
        color:white;
    }
`;


function Settings() {
  return (
    <>
        <HeadPage title='Account Settings Panel'/>

        <StyledWrapper>
            <NavLink to='/users'>
            <StyledWrapperUser>
                <img alt='users' src={require('assets/userhead.png')} />
                <h3>Users</h3>
            </StyledWrapperUser>
            </NavLink>

            <NavLink to="/admin">
                <StyledWrapperAdmin>
                    <img alt='adminpanel' src={require('assets/debuglock.png')} />
                    <h3>Admin Account</h3>
                </StyledWrapperAdmin>
            </NavLink>

            <StyledWrapperDebug>
                <img alt='debug' src={require('assets/settingsadmin.png')} />
                <h3>Debug</h3>
            </StyledWrapperDebug>  
        </StyledWrapper>
    </>
  );
}

export default Settings;
