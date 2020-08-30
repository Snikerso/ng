import React,{useContext} from 'react';
import styled from 'styled-components';
import {ButtonImport,ButtonCreate} from 'components/Atoms/Buttons';
import ListTable from 'components/Organisms/ListTable';
import {SvgImport ,SvgPlus} from 'components/Atoms/Svgs';
import contextExperiments from 'contexts/contextExperiments';



const StyledWrapper= styled.div`
  display:flex;
  flex-direction:column;
  padding:30px;
  background: #FFFFFF;
  width:90%;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  box-shadow: 6px 7px 62px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  button{
    align-self: center;
  }
`
const StyledWrapperSortButtons = styled.div`
  display:grid;
  justify-content:center;
  width:300px;
  grid-template-columns:1fr 1fr ;
  gap:10px;
  text-align:center;
`
const StyledWrapperInner = styled.div`
  display:flex;
  justify-content:space-between;
  width:95%;

`



function Projects() {

  const {stateExperiments} = useContext(contextExperiments)


  const handleCreateExperiment= () =>{
    
    
  }
  
  return (
    <>
                <StyledWrapper>
                  <ButtonCreate 
                    onClick={handleCreateExperiment} 
                    text={'Create experiment'}>
                      Create Experiment <SvgPlus/>
                  </ButtonCreate>

                    <ListTable 
                        type='EXPERIMENTS'
                        heads={['Experiment name', 'Details']} 
                        templateColums={'20% 10% 1fr'}
                        rows={stateExperiments} />
                </StyledWrapper>
    </>
  );
}

export default Projects;
