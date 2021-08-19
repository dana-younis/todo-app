import React from 'react';
import ToDo from './components/todo/todo.js';
import './styles.css';
import SettingProvider from './context/setting';


function App() {
  return (
    <SettingProvider>
      <ToDo />
    </SettingProvider>
  );
}

export default App;
