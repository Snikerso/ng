import React from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components';

const StyledWrapper = styled.nav`
  width:100%;
  display:flex;
  margin-top:10px;
  align-items:center;
  justify-content:center;


    a {
      width:80%;
      color:white;
      padding-top:5px;
      padding-bottom:5px;
      padding-left:20px;
      text-decoration:none;
    }

  .active{
    background: #0072F2;
    border-radius: 20px;
    box-shadow:2px 3px 10px rgba(0, 0, 0, 0.25);
  }
`;
const StyledWrapperInner = styled.div`
    width:100%;
    display:flex;
    align-items:center;

    a {
      width:100%;
      padding-left:20px;
      padding-top:5px;
      padding-bottom:5px;
      color:white;
      text-decoration:none;
    }
    img{
      width:30px;
      margin-right:10px;
    }
  .active{
    background-color:red;
  }
`;

const ImgSmaller = styled.img`
 width:100%;
    height:25px;


`;

function NavItem({asset,text,path}) {

  const renderImgSwitch = (assettile) =>{
    switch(assettile) {
      case 'home':
        return <img src={require('assets/home.svg')}/>;
      case 'game':
        return <img src={require('assets/game.svg')}/>;
      case 'bigdatabase':
        return <img src={require('assets/bigdatabase.svg')}/>;
      case 'experiments':
        return <img src={require('assets/experiments.svg')}/>;
      case 'swagger':
        return <img src={require('assets/swagger.svg')}/>;
      case 'options':
        return <ImgSmaller src={require('assets/options.svg')}/>;
      case 'dictionary':
        return <ImgSmaller src={require('assets/dictionary.svg')}/>;
      case 'faq':
        return <ImgSmaller src={require('assets/faq.svg')}/>;
      case 'help':
        return <ImgSmaller src={require('assets/help.svg')}/>;
      default:
        return 'foo';
    }
  }


  return (
    <>
      

        <StyledWrapper>
          <NavLink to={path} exact activeClassName="active" >
          <StyledWrapperInner>{ renderImgSwitch(asset)}<span>{text}</span></StyledWrapperInner>
          </NavLink>  
        </StyledWrapper>
    </>
  );
}

export default NavItem;
