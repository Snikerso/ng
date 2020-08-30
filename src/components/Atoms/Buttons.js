import React from 'react';
import styled from 'styled-components';
import {SvgPlus} from 'components/Atoms/Svgs';


const StyledButtonCreate = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    outline:none;
    width:130px;
    height:40px;
    border:none;
    background: ${props => props.theme.thourth};
    box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color:${props => props.theme.white};
    img{
        width:28px;
        margin-left:30px;
    }
    :hover{
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        cursor:pointer;
    }
`
export const ButtonCreate = ({text,handleCreate}) =>{
    return(
        <StyledButtonCreate onClick={handleCreate}>{text}<SvgPlus/></StyledButtonCreate>
    )
}


export const ButtonImport = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    outline:none;
    width:200px;
    height:80px;
    border:none;
    background: ${props => props.theme.first};
    box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color:${props => props.theme.white};
    img{
        width:28px;
        margin-left:30px;
    }
    :hover{
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        cursor:pointer;
    }
`
export const ButtonAction = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    outline:none;
    width:100px;
    height:40px;
    border:none;
    background: ${props => props.theme.first};
    box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color:${props => props.theme.white};
    img{
        width:28px;
        margin-left:30px;
    }
    :hover{
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        cursor:pointer;
    }
`
export const ButtonDelete = styled.button`
    width:100px;
    height:40px;
    border:none;
    background: ${props =>props.theme.third};
    box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    outline:none;
    color:${props => props.theme.white};
    :hover{
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        cursor:pointer;
    }
`


export const ButtonEdit = styled.button`
    width:100px;
    height:40px;
    border:none;
    background: ${props =>props.theme.second};
    box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color:${props => props.theme.white};
    display:block;
    :hover{
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        cursor:pointer;
    }
`


export const ButtonDeleteMini = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width:35px;
    height:35px;
    border:none;
    outline:none;
    background-color: ${props =>props.theme.white};
    box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    color:${props => props.theme.white};
    img{width:35px;}
    :hover{
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        cursor:pointer;
    }
`