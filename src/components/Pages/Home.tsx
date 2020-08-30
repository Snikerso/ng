import React from 'react';
import styled from 'styled-components';
import HeadPage from '../Atoms/HeadPage';


const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:90%;
    height:100%;
`
const StyledWrapperInner = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;

`

const StyledWrapperSqaere = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-right:20px;
    min-width:340px;
    height:200px;
    text-align:center;
    background-color: #0050AA;
    color:white;
    h3{
      width:100%;
    }
`;

function Home() {

  
  return (
    <>
  <HeadPage title={'HOME'}/>
    <StyledWrapper>
        <StyledWrapperInner>
          <StyledWrapperSqaere>
            <h3>Hasło Projektu</h3>
          </StyledWrapperSqaere>
          
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </StyledWrapperInner>
        <StyledWrapperInner>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </StyledWrapperInner>
        <StyledWrapperInner>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <StyledWrapperSqaere>
            <h3>Inny krótki tekst</h3>
          </StyledWrapperSqaere>
        </StyledWrapperInner>

    </StyledWrapper>

</>
  );
}

export default Home;
