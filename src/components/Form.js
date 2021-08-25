import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Icon, Label } from '@blueprintjs/core';
import { ListContext } from '../context/Settings';

function List(props) {
  const {
    list,
    toggleComplete,
    deleteItem,
    itemNumber,
    handlePaginationChange,
    displayComplete,
    done,
    setDone,
    
  } = useContext(ListContext);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemNumber);

  function next() {
    setStartIndex(startIndex + itemNumber - 1);
    setEndIndex(endIndex + itemNumber);
  }

  function previous() {
    setStartIndex(startIndex - itemNumber);
    setEndIndex(endIndex - itemNumber);
  }

  useEffect(() => {
    setStartIndex(0);
    setEndIndex(itemNumber);
  }, [itemNumber]);

  useEffect(() => {
    setDone(list);
  }, [list]);

  const listOfTodos = done.slice(startIndex, endIndex).map((item, idx) => {
    let deff;
    if (item.difficulty > 3) {
      deff = 'hard';
    } else if ((item.difficulty = 3)) {
      deff = 'medium';
      
    } else {
      deff = 'easy';
    }
    return (
      <Card id="formCard">
        <h4>todo: {item.text}</h4>
        <h4>Assigned to: {item.assignee}</h4>
        <h4>difficulty : {deff}</h4>

        <Button onClick={() => toggleComplete(item)}>
          {item.complete ? 'complete' : 'incomplete'}
        </Button>
        <Button  id="badge-success "  onClick={() => deleteItem(item._id)}>Delete</Button>
      </Card>
    );
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Label>
        <label id="perPagelabel" htmlFor="perPage">
          Items Displayed Per Page:
        </label>
        <select
          id="perPageSelect"
          name="perPage"
          onChange={handlePaginationChange}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>

        </select>
      </Label>

      <button  onClick={displayComplete}
       id="hideButton"
      >
        Hide Completed Tasks
      </button>
      <ul >
        {listOfTodos}
      </ul>
      <Icon icon="double-chevron-left" onClick={() => next()}></Icon>
      <Icon icon='double-chevron-right' onClick={() => previous()}></Icon>
    </div >
  )
}

export default List;
