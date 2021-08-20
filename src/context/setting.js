import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [hideComplete, setHideComplete] = useState(true);
  
  const [itemsPerPage, setItemPerPage] = useState(3);


  const state = {
    hideComplete,
    itemsPerPage,
   
    setHideComplete,
    setItemPerPage,
 
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
