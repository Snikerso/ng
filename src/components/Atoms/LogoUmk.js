import React from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components';
import Logo from 'assets/logoumk.png'

const StyledWrapperUnLoged = styled.div`

    img{
        position:absolute;
        top:50%;
        left:300px;
        width:140px;
        transform:translateY(-50%);
    }
`;

const StyledWrapperLoged = styled.div`

    img{
        position:fixed;
        bottom:0;
        left:275px;
        width:200px;
    }
`;


function LogoUmk({isLogged}) {

  return (
    <>
    {isLogged ? 
        (
        <StyledWrapperLoged>
            <a href='https://www.umk.pl/en/' target="_blank">
                <img alt="neuro games" src={Logo}/>
            </a>
            
        </StyledWrapperLoged>    
        ):(
        <StyledWrapperUnLoged>
            <a href='https://www.umk.pl/en/' target="_blank">
                <img alt="neuro games" src={Logo}/>
            </a>
            
        </StyledWrapperUnLoged>    
        )
    }
   </>
  );
}

export default LogoUmk;
