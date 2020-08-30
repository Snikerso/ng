import React from 'react';
import {NavLink} from 'react-router-dom';
import styled  from 'styled-components';
import TitleLogo from 'assets/neurogamestitle.png'

const StyledWrapperUnLoged = styled.nav`
  display:flex;
  margin-left:20px;
  margin-top:10px;
  align-items:center;

    a {
      margin-left:16px;
      color:white;
      text-decoration:none;
    }
    img{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:200px;
    }
`;



function HeadPage({title}) {

  return (
    <>
        <h2>{title}</h2>
   </>
  );
}

export default HeadPage;
