import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

import { If, Else, Then } from 'react-if';

import Signup from './Signup';
import logIn from './login';



function Auth(props) {
  const { loggedIn, user } = useContext(AuthContext);

  let okToRender =
    loggedIn && props.capability
      ? user?.capabilities.includes(props.capability)
      : false;
  return (
    <div>
      <If condition={okToRender}>
        <Then>
          <div>{props.children}</div>
        </Then>
        <Else>
          <dev>
          <Signup />
<logIn/>
           
          </dev>
        </Else>
      </If>
    </div>
  );
}

export default Auth;
