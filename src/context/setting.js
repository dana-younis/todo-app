import React, { useState } from 'react';
export const SettingContext = React.createContext();

export default function SettingProvider(props) {
  const [hideComplete, setHideComplete] = useState(true);
  const [itemsPerPage, setItemPerPage] = useState(3);
  // const [sortField, setSortField] = useState('difficulty');

  const state = {
    itemsPerPage,
    hideComplete,
    setHideComplete,
    setItemPerPage,

  };

  return (

    <SettingContext.Provider value={state}>

      {props.children}

    </SettingContext.Provider>

  );

}


