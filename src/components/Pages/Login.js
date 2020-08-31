import React,{useContext} from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import {useFormik} from 'formik';
import contextAuth from '../../contexts/contextAuth';
import styled from 'styled-components';


const StyledWrapper = styled.div`
  position:fixed;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);

  width:50vw;
  height:50vh;

`
const StyledWrapperInnerForm = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  width:50vw;
  height:20vh;
  background: #C4C4C4;
  border: 8px solid #E6E6E6;
  box-sizing: border-box;
`
const StyledWrapperInnerFormInputItems = styled.div`
display:flex;
width:350px;
justify-content:space-between;
`

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #FFFFFF;

`;
const Input = styled.input`
  width:150px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: black;
  
`;
const Button = styled.button`
  position:absolute;
  bottom:0px;
  right:0px;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.25));
  background: #0050AA;
  border: 3px solid #E6E6E6;
  box-sizing: border-box;
  width:100px;
  height:40px;
  text-align:center;
  line-height:30px;
`;
const InputCheckBox = styled.div`
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-left: 5px;
  margin-top: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: yellow;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: yellow;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
  
`;


function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(['.AspNetCore.Identity.Application'])
  let history = useHistory()
  const {stateAuth,dispatchAuth}= useContext(contextAuth);
  
  
  const handleLogin = (loginValues) => {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/octet-stream');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');
    
    const credentials = { userName: "admin", password: "Admin1@", rememberMe: false }

    axios.post(`/api/Ath/Login`,credentials, {
      data: {
        userName: "admin", password: "Admin1@", rememberMe: false
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Cookie' : document.cookie },

      }).then(res => console.log(res))

    // fetch(`/api/Ath/Login`, {
    //     method: 'POST',
    //     cache: 'no-cache',
    //     // cookie: '.AspNetCore.Identity.Application=CfDJ8MkJt5t9JS9HmLyYN32LvvKFxgpt5_yfvMaV81KDv1PIDgvHUCrNUJZUF3dqVxBxuzjMvTG28dH-Gbp6f5cvLm0ZnlY7p9BswXb_qdS2uZ01vzY6vHhNMOiVhkE7HT5eS9qNF9_BvMBhfcYGkZbheuKrDSM1Jh0Y5vZ8Ld_hQJ-iTXUUt_Uo5imICYQQefbaUWCoAi765Knt3biNWJanmkr4QbLoAQjZdrItiuvWCbRunKkwmI21bWjAsvL-oOJ3joFF2j7tMDFtho17LJmd5zEhVqZMA4SwB2QooCf9SuHvQR0AQAINul_gSHOq6FQqOIXxu4_1X8FgANvEtSRBOGf-BZtd1GYolAaf46uf5ud5otuwjI11GjRCAZBU-zBHFwGQOWoub_geCJSIWulW9i9OZB4BWGtgVr8aeck1N-MTg0481NARr2I7EiFw7P65ofs05Lp0QjCfkh-xiyKp9XmGg3A47j9SsD3BpFG0WEwDNYKpGh9EuBj07KhWGY7o_fEkqR6ssJ26L0RjFhifzVIyX3NInF778zUXDI5J2-7XJaGricQKvDPtw5SNNK0OZuOgvV8x-cC2EZD39ZrjMuW2olT9jXg4pKHjYg0IS-g_nA9kHn9AVG4Rmfe9uqWsyLkvf7-aseUIahb-2t9JBv_8Uba_2BCWE-lRHgmEx6Fw7Jk0DZJqFom3sKfeU4GGNGS8YUAdfQ4szkEXb6n1nf8; expires=Wed, 26 Aug 2020 08:18:58 GMT; path=/; secure; samesite=lax',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json; charset=utf-8',
    //       'Cookie' : document.cookie },
    //     credentials: 'include',
    //     body: JSON.stringify(loginValues),
  
    // }).then((res) => res)
    //     // .then(data =>
    //     //   dispatchAuth({type:'LOGIN',data}),
    //     // )
    //     .catch(error => console.error(error)) 

        fetch("/api/Ath/UserInfo", {
          method: 'GET',
          credentials: 'include',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
      })
          .then(res => res.ok &&( res.json()))
          .then(data=>(
            dispatchAuth({type:'LOGIN',data}),
          window.location.href= "/" ) 
          )
  }

  const formik = useFormik({
    initialValues:{
      userName: "admin", 
      password: "Admin1@", 
      rememberMe: false
    },
    onSubmit:values => {
      console.log('values',values);
      handleLogin(values)
    }
  })



    const handleGetUserInfo =  (e) => {
      e.preventDefault()

      fetch("/api/Ath/UserInfo", {
          method: 'GET',
          // mode: 'cors',
          credentials: 'include',
          // cookie: '.AspNetCore.Identity.Application=CfDJ8MkJt5t9JS9HmLyYN32LvvKFxgpt5_yfvMaV81KDv1PIDgvHUCrNUJZUF3dqVxBxuzjMvTG28dH-Gbp6f5cvLm0ZnlY7p9BswXb_qdS2uZ01vzY6vHhNMOiVhkE7HT5eS9qNF9_BvMBhfcYGkZbheuKrDSM1Jh0Y5vZ8Ld_hQJ-iTXUUt_Uo5imICYQQefbaUWCoAi765Knt3biNWJanmkr4QbLoAQjZdrItiuvWCbRunKkwmI21bWjAsvL-oOJ3joFF2j7tMDFtho17LJmd5zEhVqZMA4SwB2QooCf9SuHvQR0AQAINul_gSHOq6FQqOIXxu4_1X8FgANvEtSRBOGf-BZtd1GYolAaf46uf5ud5otuwjI11GjRCAZBU-zBHFwGQOWoub_geCJSIWulW9i9OZB4BWGtgVr8aeck1N-MTg0481NARr2I7EiFw7P65ofs05Lp0QjCfkh-xiyKp9XmGg3A47j9SsD3BpFG0WEwDNYKpGh9EuBj07KhWGY7o_fEkqR6ssJ26L0RjFhifzVIyX3NInF778zUXDI5J2-7XJaGricQKvDPtw5SNNK0OZuOgvV8x-cC2EZD39ZrjMuW2olT9jXg4pKHjYg0IS-g_nA9kHn9AVG4Rmfe9uqWsyLkvf7-aseUIahb-2t9JBv_8Uba_2BCWE-lRHgmEx6Fw7Jk0DZJqFom3sKfeU4GGNGS8YUAdfQ4szkEXb6n1nf8; expires=Wed, 26 Aug 2020 08:18:58 GMT; path=/; secure; samesite=lax',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Cookie' : document.cookie },
          body:JSON.stringify({title:'dsadsad'})
      })
          .then((data) => data.json())
          .then(data => console.log(data))

          // setCookie('.AspNetCore.Identity.Application',['/'])
        
          .catch(
              error => console.error(error)
          )
    
    }

  return (
    <>
    <StyledWrapper>
        <form onSubmit={formik.handleSubmit}>
          <StyledWrapperInnerForm>
            <StyledWrapperInnerFormInputItems>
              <Label htmlFor='userName'>Login</Label>
              <Input 
                name='userName'
                onChange={formik.handleChange}
                values={formik.values.userName}/>
            </StyledWrapperInnerFormInputItems>
            <StyledWrapperInnerFormInputItems>
              <Label htmlFor='password'>Password</Label>
              <Input 
                name='password'
                onChange={formik.handleChange}
                values={formik.values.userName}/>
            </StyledWrapperInnerFormInputItems>
            </StyledWrapperInnerForm>
            <InputCheckBox>
            <label htmlFor='rememberMe' className="container">
              <input 
                name='rememberMe' 
                type="checkbox" 
                checked="checked"/>
              <span className="checkmark"></span>
              Remember Me
            </label>
            <p>Contact you system administrator if you don't have valid account</p>
            <Button type="submit" >Submit</Button>
            </InputCheckBox>
   
        </form>
        </StyledWrapper>
        </>
);}

export default Login;
