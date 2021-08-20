import React from 'react';
import SettingsContext from './context/setting.js';
import ToDo from './components/todo';

function App() {
  return (
    <SettingsContext>
      <ToDo />
    </SettingsContext>
  )
}

export default App;
