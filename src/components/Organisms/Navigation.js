import React , {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components';
import NavItem from '../Atoms/NavItem';
import contextAuth from '../../contexts/contextAuth';


const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    position: fixed;
    top:0;
    left: 0;
    width:260px;
    height:100vh;
    background-color:${props => props.theme.first};
    z-index:1;
    border-top-right-radius: 1%;
    border-bottom-right-radius: 1%;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.25);
    
`;
const StyledWrapperNav = styled.nav`
    display:flex;
    flex-direction:column;
    justify-items:center;
    margin-top:14px;
    a{
      color:white;
      text-decoration:none;
    }
    > *{
      margin-top:14px;
    }

`;

const StyledWrapperNavBottom = styled.nav`
    display:flex;
    width:260px;
    flex-direction:column;
    position: fixed;
    bottom:0;
    font-size:9px;
`;

const StyledWrapperNavAvatar= styled.nav`
    display:flex;
    border-bottom: 1px solid rgba(224, 221, 221, 0.32);
    height:65px;
    justify-content:space-around;
    justify-items:center;
    align-items:center;
    align-content:center;
    font-size:9px;

    h2{
      font-family: Montserrat;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;

    }
    .avatar{
      width:55px;
      height:55px;
      border-radius:200px;
      background-color:grey;

    }
`;


function Navigation() {
  const {stateAuth} = useContext(contextAuth);


  return (
    <>
    {stateAuth.isAuthenticated ? (
        <StyledWrapper>
          <StyledWrapperNavAvatar>
              <div className='avatar'></div>
              <h2>Nazwa użytkownika</h2>
        </StyledWrapperNavAvatar>
        <StyledWrapperNav>
            <NavItem asset={'home'} path={'/'} text={'Home'}/>
            <NavItem asset={'bigdatabase'} path={'/big-database'} text={'BIG DATABASE'}/>
            <NavItem asset={'game'} path={'/game'} text={'GAMES'}/>
            <NavItem asset={'experiments'} path={'/experiments'} text={'EXPERIMENTS'}/>
            <NavItem asset={'swagger'} path={'http://localhost:5000/swagger/index.html#'} text={'SWAGGER'}/>
        </StyledWrapperNav>
        <StyledWrapperNavBottom>
          <NavItem asset={'options'} path={'/options'} text={'PROGRAM OPTIONS'}/>
          <NavItem asset={'dictionary'} path={'/dictionary'} text={'DICTIONARY'}/>
          <NavItem asset={'faq'} path={'/faq'} text={'FAQ'}/>
          <NavItem asset={'help'} path={'/help'} text={'HELP'}/>
        </StyledWrapperNavBottom>

  </StyledWrapper>
    ):(
        <StyledWrapper>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </StyledWrapper>
    )}

    </>
  );
}

export default Navigation;
