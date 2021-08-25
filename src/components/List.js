import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Icon, Label } from '@blueprintjs/core';
import { ListContext } from '../context/Settings';
import Pagination from './pagination.js';
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
    a,
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
        <p>todo: {item.text}</p>
        <p>Assigned to: {item.assignee}</p>
        <p>difficulty : {deff}</p>

        <Button onClick={() => toggleComplete(item)}>
          {item.complete ? 'complete' : 'incomplete'}
        </Button>
        <Button onClick={() => deleteItem(item._id)}>Delete</Button>
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
        </select>
      </Label>

      <button id="hideButton" onClick={displayComplete}>
        inCompleted Tasks : Completed Tasks
      </button>
      <ul>{listOfTodos}</ul>

      <Icon icon="double-chevron-left" onClick={() => next()}></Icon>
      <Icon icon="double-chevron-right" onClick={() => previous()}></Icon>
    </div>
  );
}

export default List;
