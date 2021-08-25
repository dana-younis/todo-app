import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { FormGroup, InputGroup, Button, Card, Label } from '@blueprintjs/core';
import './sign.css';
function Signup(props) {
  const {
    loggedIn,
    setLoggedIn,
    user,
    setUser,
    validateToken,
    logout,
    login,
    setLoginState,
    signup,
  } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setRole(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password, role);
  };

  return (
    <div size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <h1>Signup</h1>

      <card className="todo" >
        <FormGroup >
          <FormGroup >
            <label class="form-control-label">Username</label>
            <InputGroup
              intent="danger"
              onChange={handleChange}
              name="username"
              required
              type="text"
              placeholder="Enter username"
            />
          </FormGroup>
          <FormGroup controlId="formBasicPassword" intent="danger">
            <Label intent="danger" class="form-control-label">
              Password
            </Label>
            <InputGroup
              intent="danger"
              onChange={handleChange}
              name="password"
              required
              type="password"
              placeholder="Password"
            />
          </FormGroup>

          <FormGroup>
            <Label>Role</Label>
            <select onChange={handleChange} name="role" as="select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="editor">editor</option>
            </select>
          </FormGroup>
        </FormGroup>

        <Button id="formGroupMargin" onClick={handleSubmit}>
          Signup
        </Button>

        {/* <Button
        intent="danger"
        onClick={logout}
       
      >
        Logout
      </Button> */}
      </card>
    </div>
  );
}

export default Signup;
