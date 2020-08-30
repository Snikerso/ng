import React from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components';

const StyledWrapperUnLoged = styled.nav`
  display:flex;
  margin-left:20px;
  margin-top:10px;
  align-items:center;
  color: #015BC1;
  
`;

const StyledWrapperLoged = styled.nav`
  display:flex;
  margin-left:20px;
  margin-top:10px;
  align-items:center;
`;


function Header({isLogged}) {

  return (
    <>
    {isLogged ? 
        (
        <StyledWrapperLoged>
            <h1>Neuro Games</h1>
        </StyledWrapperLoged>    
        ):(
        <StyledWrapperUnLoged>
            <h1>Neuro Games</h1>
        </StyledWrapperUnLoged>    
        )
    }
   </>
  );
}

export default Header;
