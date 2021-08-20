
      
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return(
        <header>
         <Navbar bg="primary" variant="dark">
        <Navbar.Brand id="homeBlue" href="#home">Home</Navbar.Brand>
      </Navbar>
           
        </header>
    )
}
export default Header;