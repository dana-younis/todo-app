import React from 'react';
import ToDo from './components/todo';

import AuthProvider from './context/auth';

import Auth from './components/auth';
import ListContext from './context/Settings';
import Header from './components/Header';

function App(props) {
  return (
    <AuthProvider>
      <Header />

      <Auth capability="read">
        <ListContext>
          <ToDo />
        </ListContext>
      </Auth>
    </AuthProvider>
  );
}

export default App;
