import React from 'react';

import Login from './login';

function Header() {
  return (
    <header bg="primary" variant="dark">
      <Login />
      <h2
        style={{
          position: 'absolute',
          margin: 'auto',
          left: '0',
          right: '0',

          color: 'white',

          top: '0px',
          height: '50px',
          background: '#0074d9	',
        }}
      >
        HOME
      </h2>
    </header>
  );
}

export default Header;
