import React, { useContext, useEffect, useState } from 'react';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import List from './Form';
import './todo.scss';
import {
  FormGroup,
  InputGroup,
  Button,
  Navbar,
  Label,
} from '@blueprintjs/core';

import { ListContext } from '../context/Settings';

const ToDo = (props) => {
  const { handleSubmit, handleChange } = useContext(ListContext);

  const [incomplete, setIncomplete] = useState([]);
  const listObject = useContext(ListContext);

  useEffect(() => {
    let incompleteCount = listObject.list.filter(
      (item) => !item.complete
    ).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [listObject.list, incomplete]);

  return (
    <>
     <Navbar bg="dark" variant="dark" id="navBlack">
      <h3 >To Do List Manager ( {incomplete} )</h3>
      </Navbar>

      <card className="todo">
        <FormGroup >
       
          <h3>Add To Do Item</h3>
         
          <Label>
          To Do Item:
            <InputGroup
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Add To Do List Item"
              autoComplete="off"
            />
            
          </Label>

          <Label>
            <span>Assigned To</span>
            <InputGroup
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assigned To"
              autoComplete="off"
            />
          </Label>

          <Label>
            <span>Difficulty</span>
            <input
              id="diffSlider"
              onChange={handleChange}
              defaultValue={1}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </Label>

          <Label>
            <Button id="formGroupMargin" type="click" onClick={handleSubmit}>
              Add Item
            </Button>
          </Label>
        </FormGroup>
      </card>

      <List />
    </>
  );
};

export default ToDo;
