  
import { Navbar ,Nav} from 'react-bootstrap';
import React , {useContext} from 'react';
import Register from './signup.jsx';
import SignIn from './signin.jsx';
import { Switch, Route} from "react-router-dom";
import { AuthContext } from '../context/auth-context';

import If from './IF.js';
const NavBar = (props) => {
  const context  = useContext(AuthContext);
  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{'padding': '20px' }}>
      {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
      
      <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <div style={{'margin-left': '650px' }}>

                    <SignIn  />
                    </div>
                    <If condition={!context.loggedIn}>
                        <Nav.Link href="/signup" onClick={context.handleShow}>Register</Nav.Link>
                        <Switch>
                            <Route exact path="/">
                                <Register />
                            </Route>
                        </Switch>
                    </If>
                
                </Nav>
    </Navbar>
  );
};

export default NavBar;


