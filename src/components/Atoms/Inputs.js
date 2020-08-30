import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
    width:200px;
    height:40px;
    padding:20px;
    background: ${props=>props.theme.white};
    border: 2px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: inset 1px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    outline:none;

    :focus{
        box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.25);
    }
`