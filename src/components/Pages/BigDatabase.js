import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {useFetchFunction} from '../utils.js';
import {HeadPage} from 'components/Atoms/Heads'
import {ButtonImport,ButtonCreate} from 'components/Atoms/Buttons'
import ListTable from 'components/Organisms/ListTable'
import {SvgImport} from 'components/Atoms/Svgs'
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


function BigDatabase() {
    const [isDataBase ,setIsDataBase] = useState(false)
    const {stateExperiments} = useContext(contextExperiments)
    const credentials2 ={ExperimentName:'Bialorusini' , ParticipantCode:'b02'}

        return (
            <>     
                <HeadPage head={"BIG DATABASE"} />
                <StyledWrapper>
                    <StyledWrapperInner>
                        <StyledWrapperSortButtons>
                            <p>SORT BY</p>
                            <ButtonCreate text={'age'}/>
                            <ButtonCreate text={'sex'}/>
                        </StyledWrapperSortButtons>
                        <ButtonImport>Import Big Database<SvgImport/></ButtonImport>
                    </StyledWrapperInner>

                    <ListTable 
                        type='BIGDATABASE'
                        heads={['Code','Gender' , 'Age' ,'Experiment name' ,'data views', 'Import']} 
                        templateColums={'20% 10% 10% 20%  20% 20%'}
                        rows={stateExperiments} />
                </StyledWrapper>
            </>
  );
}

export default BigDatabase;