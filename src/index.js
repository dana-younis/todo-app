import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './context/setting'
import App from './app.js';

import  AuthContext  from './context/auth-context';
import { BrowserRouter } from "react-router-dom";

 function  Main () {

    return(
      <BrowserRouter>
      <AuthContext>
        <SettingsContext>
          <App />
        </SettingsContext>
      </AuthContext>
      </BrowserRouter>
      );

}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement)
