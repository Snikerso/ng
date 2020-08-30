import React from 'react';
import styled  from 'styled-components';

const StyledWrapper = styled.h2`
    display:flex;
    align-items:center;
  
`;
const StyledHeadPage = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
  
`;
const StyledSubHeadPage = styled.h2`
    margin-left:20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  
`;


export const HeadPage = ({head, subHead}) => {
    return(
        <StyledWrapper>
            <StyledHeadPage>{head}</StyledHeadPage>
           {subHead && <StyledSubHeadPage>{subHead}</StyledSubHeadPage>} 
        </StyledWrapper>
    )
}