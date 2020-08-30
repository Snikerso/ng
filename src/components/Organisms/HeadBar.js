import React , {useContext} from 'react';
import styled  from 'styled-components';
import HeadItem from '../Atoms/HeadItem';
import contextAuth from '../../contexts/contextAuth';
import Header from '../Atoms/Header';
import LogoUmk from 'components/Atoms/LogoUmk';

const StyledWrapper = styled.nav`
    display:flex;
    justify-content:flex-end;
    justify-items:center;
    align-items:center;
    position: fixed;
    top: 0;
    left: 0;
    width:100vw;
    height:7vh;
    top:0;
    box-shadow: 0px 3px 27px rgba(0, 0, 0, 0.25);
    background-color:${props=>props.theme.white};
    z-index:1;
    
`;
const StyledWrapperInner = styled.div`
    position:relative;
    width:100%;
    height:100%;
    h1{
        position:absolute;
        left:55%;
        top:15%;
        font-size:40px;
        margin:0px;
        color: #015BC1;
    }

`;
const StyledWrapperInnerButtons = styled.div`
        display:flex;
        position:absolute;
        right:0;
        top:50%;
        transform:translateY(-50%)
        
    }

`;



function Head() {
  const {stateAuth,dispatchAuth} = useContext(contextAuth);


  return (
    <>
    
        <StyledWrapper>
            <StyledWrapperInner>
                <Header isAuthenticated={stateAuth.isAuthenticated }/>
                <LogoUmk/>
                {stateAuth.isAuthenticated && (
                    <StyledWrapperInnerButtons>
                        <HeadItem path={'/login'} asset={'back'}/>
                        <HeadItem path={'/login'} asset={'usersettings'}/>
                        <HeadItem path={'/login'} asset={'logout'}/>
                    </StyledWrapperInnerButtons>
                )}
            </StyledWrapperInner>
        </StyledWrapper>
    

    </>
  );
}

export default Head;
