import React ,{useContext} from 'react';
import {} from 'react-router-dom';
import styled  from 'styled-components';
import contextAuth from '../../contexts/contextAuth';

import LogoutSVG from 'assets/logout.svg';




const StyledWrapper = styled.div`
    display:flex;

    align-items:center;

    :hover{
        cursor: pointer;
    }
    a {

      color:white;
      text-decoration:none;
    }
    img{

    }


`;

const initLogout =   
{
  "isAuthenticated":false,
  "userName":"",
  "databaseUser":"",
  "databaseName":"",
  "hasDatabase":false,
  "hasDatabaseAccount":false,
  "exposedClaims":{"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier":"","http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name":"","AspNet.Identity.SecurityStamp":"","http://schemas.microsoft.com/ws/2008/06/identity/claims/role":""}
}


function LogoutButton() {
    const {stateAuth,dispatchAuth} = useContext(contextAuth);

    const handleLogout =(e)=>{
        e.preventDefault()
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/octet-stream');
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Access-Control-Allow-Credentials', 'true');

        fetch(`/api/Ath/Logout`, {
            method: 'POST',
            cache: 'no-cache',
            // cookie: '.AspNetCore.Identity.Application=CfDJ8MkJt5t9JS9HmLyYN32LvvKFxgpt5_yfvMaV81KDv1PIDgvHUCrNUJZUF3dqVxBxuzjMvTG28dH-Gbp6f5cvLm0ZnlY7p9BswXb_qdS2uZ01vzY6vHhNMOiVhkE7HT5eS9qNF9_BvMBhfcYGkZbheuKrDSM1Jh0Y5vZ8Ld_hQJ-iTXUUt_Uo5imICYQQefbaUWCoAi765Knt3biNWJanmkr4QbLoAQjZdrItiuvWCbRunKkwmI21bWjAsvL-oOJ3joFF2j7tMDFtho17LJmd5zEhVqZMA4SwB2QooCf9SuHvQR0AQAINul_gSHOq6FQqOIXxu4_1X8FgANvEtSRBOGf-BZtd1GYolAaf46uf5ud5otuwjI11GjRCAZBU-zBHFwGQOWoub_geCJSIWulW9i9OZB4BWGtgVr8aeck1N-MTg0481NARr2I7EiFw7P65ofs05Lp0QjCfkh-xiyKp9XmGg3A47j9SsD3BpFG0WEwDNYKpGh9EuBj07KhWGY7o_fEkqR6ssJ26L0RjFhifzVIyX3NInF778zUXDI5J2-7XJaGricQKvDPtw5SNNK0OZuOgvV8x-cC2EZD39ZrjMuW2olT9jXg4pKHjYg0IS-g_nA9kHn9AVG4Rmfe9uqWsyLkvf7-aseUIahb-2t9JBv_8Uba_2BCWE-lRHgmEx6Fw7Jk0DZJqFom3sKfeU4GGNGS8YUAdfQ4szkEXb6n1nf8; expires=Wed, 26 Aug 2020 08:18:58 GMT; path=/; secure; samesite=lax',
            headers: myHeaders,
            credentials: 'include',
        })
            .then((res) => {if(res.ok) { 
              dispatchAuth({type:'LOGOUT',initLogout}); 
              window.location.href='/login'
            }  },
         

            )
            .catch(
              error => console.error(error)
            )
    }




  return (
    <>
      <StyledWrapper onClick={handleLogout}>
        <img src={LogoutSVG}/>
      </StyledWrapper>      
    </>
  );
}

export default LogoutButton;
