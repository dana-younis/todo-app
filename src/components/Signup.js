import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { FormGroup, InputGroup, Button, Card, Label } from '@blueprintjs/core';

function Signup(props) {
  const {
    logout,
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
    <div >
    <div >
  
  <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
     <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
     <circle cx="170" cy="170" r="135" stroke="#404041"/>
     <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
     <circle cx="170" cy="170" r="85" stroke="#404041"/>
     <circle cx="170" cy="170" r="75" stroke="#E2007C"/>
     <circle cx="170" cy="170" r="60" stroke="#404041"/>
     
  </svg>
  
</div>
      <div  className='ss'>
        <h1>Signup</h1>

        <card className="todo">
          <FormGroup>
            <FormGroup>
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
          <Button onClick={handleSubmit}>Signup</Button>
          </FormGroup>


          {/* <Button intent="danger" onClick={logout}>
            logIN
          </Button> */}
        </card>
      </div>

      <div class="drops">
        <div class="drop drop-1"></div>
        <div class="drop drop-2"></div>
        <div class="drop drop-3"></div>
        <div class="drop drop-4"></div>
        <div class="drop drop-5"></div>
      </div>
    </div>
  );
}

export default Signup;
