import React from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components';
import LogoutButton from './LogoutButton';


const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
    margin-right:20px;
    a {
      color:white;
      text-decoration:none;
    }
    img{
      width:30px;
      :hover{
            transform:scale(1.2)
        }
    }
`;

const StyledWrapperLogout = styled.nav`
  display:flex;

  align-items:center;

    svg{
        width:25px;
        fill:white;
        :hover{
            transform:scale(1.2)
        }
        }
`;



function NavItem({asset,path}) {


  const renderImgSwitch = (assettile) =>{
    switch(assettile) {
        case 'logout':
            return <StyledWrapperLogout><LogoutButton width={20}/></StyledWrapperLogout>;
        case 'usersettings':
            return <NavLink to='/settings'><img alt='usersetting' src={require('assets/usersettings.svg')}/></NavLink>;
        case 'back':
            return <img alt='back' src={require('assets/back.svg')}/>;
        default:

            return 'foo';
    }
  }
  

  return (
    <>
      <StyledWrapper>
            {renderImgSwitch(asset)}
      </StyledWrapper>      
    </>
  );
}

export default NavItem;
