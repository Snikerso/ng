import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {useFormik} from 'formik';
import UsersList from 'components/Organisms/UsersList';
import {ButtonCreate} from 'components/Atoms/Buttons'
import {Input} from 'components/Atoms/Inputs'
import {HeadPage} from 'components/Atoms/Heads'
import {SvgPlus} from 'components/Atoms/Svgs';

const StyledWrapper = styled.div`
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
    align-self: flex-end;
  }
`
const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-items:center;
  width:100%;
  
  h2{
    align-self:flex-start;
    color:  ${props=> props.theme.first}
    
  }
  button{
    margin-top:30px;
  }

`
const StyledFormInner = styled.div`
  display:flex;
  align-content:space-between;
  justify-content:space-between;
  width:70%;
  label{
    margin-right:30px;
  }
  >*{
    margin-top:20px;
  }
`
const StyledWrapperInner = styled.div`
  display:flex;
  justify-content:flex-end;
  width:100%;

`


const handleCreateUser = (values,setModalCreateUser) =>{

  fetch('/Api/Administrator/Register', {
    method: 'POST',
    // mode: 'cors',
    credentials: 'include',
    // cookie: '.AspNetCore.Identity.Application=CfDJ8MkJt5t9JS9HmLyYN32LvvKFxgpt5_yfvMaV81KDv1PIDgvHUCrNUJZUF3dqVxBxuzjMvTG28dH-Gbp6f5cvLm0ZnlY7p9BswXb_qdS2uZ01vzY6vHhNMOiVhkE7HT5eS9qNF9_BvMBhfcYGkZbheuKrDSM1Jh0Y5vZ8Ld_hQJ-iTXUUt_Uo5imICYQQefbaUWCoAi765Knt3biNWJanmkr4QbLoAQjZdrItiuvWCbRunKkwmI21bWjAsvL-oOJ3joFF2j7tMDFtho17LJmd5zEhVqZMA4SwB2QooCf9SuHvQR0AQAINul_gSHOq6FQqOIXxu4_1X8FgANvEtSRBOGf-BZtd1GYolAaf46uf5ud5otuwjI11GjRCAZBU-zBHFwGQOWoub_geCJSIWulW9i9OZB4BWGtgVr8aeck1N-MTg0481NARr2I7EiFw7P65ofs05Lp0QjCfkh-xiyKp9XmGg3A47j9SsD3BpFG0WEwDNYKpGh9EuBj07KhWGY7o_fEkqR6ssJ26L0RjFhifzVIyX3NInF778zUXDI5J2-7XJaGricQKvDPtw5SNNK0OZuOgvV8x-cC2EZD39ZrjMuW2olT9jXg4pKHjYg0IS-g_nA9kHn9AVG4Rmfe9uqWsyLkvf7-aseUIahb-2t9JBv_8Uba_2BCWE-lRHgmEx6Fw7Jk0DZJqFom3sKfeU4GGNGS8YUAdfQ4szkEXb6n1nf8; expires=Wed, 26 Aug 2020 08:18:58 GMT; path=/; secure; samesite=lax',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cookie' : document.cookie 
    },
    body:JSON.stringify(values),
}
)
    .then(res => res 
      ,setModalCreateUser(false))
}


function Users() {
  
  const [modalCreateUser,setModalCreateUser] = useState(false)

  const formikCreateUser = useFormik({
    initialValues:{
      userName: "", 
      password: "", 
      
    },
    onSubmit:values => {
      console.log('values',values);
      handleCreateUser(values,setModalCreateUser)
    }
  })






  return (
    <>
        <HeadPage head={"ACCOUNT SETTINGS PANEL"} subHead={'Users'}/>
        <StyledWrapper>
          

          <ButtonCreate text={'Create User'} handleCreate={() => setModalCreateUser(true)}/>

          <Modal
                ariaHideApp={false}
                isOpen={modalCreateUser}
                onRequestClose={() => setModalCreateUser(false)}
                style={{
                    overlay: {
                        oppacity: 0.99,
                    },
                    content: {
                        position:'absolute',
                        left:'50%',
                        top:'50%',
                        transform:'translate(-50%,-50%)',
                        border: '4px solid #C4C4C4',
                        width: '35%',
                        height: '30%',
                        margin: 'auto auto',
                        background: 'white',
                        boxShadow: '0px 4px 6px #00000029',
                        borderRadius: '18px',
                    }
                }}
            >
              <StyledForm onSubmit={formikCreateUser.handleSubmit}>
                <h2>CreateUser</h2>
                <StyledFormInner> 
                  <label>User name</label>
                  <Input
                    name='userName'
                    onChange={formikCreateUser.handleChange}
                    values={formikCreateUser.values.userName}/>
                </StyledFormInner>
                <StyledFormInner>
                  <label>Password</label>
                  <Input
                    name='password'
                    onChange={formikCreateUser.handleChange}
                    values={formikCreateUser.values.password}/>
                </StyledFormInner>
                <StyledWrapperInner>
                  <ButtonCreate text={'Create'} type='submit'/>
                </StyledWrapperInner>
              </StyledForm>

            </Modal>


          
          <UsersList/>

        </StyledWrapper>
    </>
  );
}

export default Users;
