import React, { useState ,useContext} from 'react';
import { SettingsContext } from '../context/setting.js';

function SettingForm() {
  const context = useContext(SettingsContext);
  const [items, setItems] = useState(context.itemsPerPage);

  const handleItems = (e) => {
    e.preventDefault();

    context.setItemPerPage(Number(e.target.items.value));
    localStorage.setItem("ItemPerPage" , Number(e.target.items.value))
  };
  return (
    <div>
      <form onSubmit={handleItems}   >
        <input
          name="items"
          onChange={(e) => {
            setItems(e.target.value);
          }}
          value={items}
        ></input>
        <button type="submit">Items Displayed Per Page(number):</button>
      </form>
    </div>
  );
}
export default SettingForm;