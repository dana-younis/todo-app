import React, { Component, useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Card, Button, Icon, Label } from '@blueprintjs/core';
import { If, Else, Then } from 'react-if';

function Login() {
  const {
    loggedIn,
    logout,
    login,
  } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const contextType = AuthContext;
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleChange1 = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <If condition={loggedIn}>
        <Then>
          <Button intent="danger" onClick={logout}>
            Logout
          </Button>
        </Then>
        <Else>
          <form>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange1}
            />
            {/* <Button intent="danger" onClick={handleSubmit}>
              Login
            </Button> */}
          </form>
        </Else>
      </If>
    </div>
  );
}

export default Login;
