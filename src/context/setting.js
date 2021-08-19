import React, { useState } from 'react';
import { useEffect } from 'react';
export const SettingsContext = React.createContext();

export default function SettingProvider(props) {
  const [hideComplete, setHideComplete] = useState(true);
  const [itemsPerPage, setItemPerPage] = useState(3);
  // const [sortField, setSortField] = useState('difficulty');
  useEffect(() => {
    return () => {
      const items = localStorage.getItem('ItemPerPage');
      if (items) {
        setItemPerPage(items);
      }
    };
  }, []);
  const state = {
    itemsPerPage,
    hideComplete,
    setHideComplete,
    setItemPerPage,
    // sortField,
    // setSortField,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
