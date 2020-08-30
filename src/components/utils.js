import React from 'react';
import {useQuery} from 'react-query';

export  function useFetchFunction (api, body, method ,name){

   const { isLoading, error, data } = useQuery(name,async () =>
    await fetch(api, {
      method: method,
      // mode: 'cors',
      credentials: 'include',
      // cookie: '.AspNetCore.Identity.Application=CfDJ8MkJt5t9JS9HmLyYN32LvvKFxgpt5_yfvMaV81KDv1PIDgvHUCrNUJZUF3dqVxBxuzjMvTG28dH-Gbp6f5cvLm0ZnlY7p9BswXb_qdS2uZ01vzY6vHhNMOiVhkE7HT5eS9qNF9_BvMBhfcYGkZbheuKrDSM1Jh0Y5vZ8Ld_hQJ-iTXUUt_Uo5imICYQQefbaUWCoAi765Knt3biNWJanmkr4QbLoAQjZdrItiuvWCbRunKkwmI21bWjAsvL-oOJ3joFF2j7tMDFtho17LJmd5zEhVqZMA4SwB2QooCf9SuHvQR0AQAINul_gSHOq6FQqOIXxu4_1X8FgANvEtSRBOGf-BZtd1GYolAaf46uf5ud5otuwjI11GjRCAZBU-zBHFwGQOWoub_geCJSIWulW9i9OZB4BWGtgVr8aeck1N-MTg0481NARr2I7EiFw7P65ofs05Lp0QjCfkh-xiyKp9XmGg3A47j9SsD3BpFG0WEwDNYKpGh9EuBj07KhWGY7o_fEkqR6ssJ26L0RjFhifzVIyX3NInF778zUXDI5J2-7XJaGricQKvDPtw5SNNK0OZuOgvV8x-cC2EZD39ZrjMuW2olT9jXg4pKHjYg0IS-g_nA9kHn9AVG4Rmfe9uqWsyLkvf7-aseUIahb-2t9JBv_8Uba_2BCWE-lRHgmEx6Fw7Jk0DZJqFom3sKfeU4GGNGS8YUAdfQ4szkEXb6n1nf8; expires=Wed, 26 Aug 2020 08:18:58 GMT; path=/; secure; samesite=lax',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Cookie' : document.cookie },
           
    })
      .then(res => res.json())
      .then(data =>data)

    );


    return  [data,isLoading,error]
  
}
