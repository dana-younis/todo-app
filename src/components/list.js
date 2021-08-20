import React, { useEffect, useState, useContext } from 'react';
import { When } from 'react-if';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import useHook from '../hooks/formHooks.js';
import { FormControl } from 'react-bootstrap';
import { SettingsContext } from '../context/setting.js';
import Pagination from './pagination.js';



function ToDoList(props) {
  const settingsContext = useContext(SettingsContext);
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const [update, setUpdate] = useState(false);
  const [handleSubmit, values] = useHook(updateList);
  const [complete, setComplete] = useState('');
  const [currentPage, setCurrentPage] = useState('1');

  const toggleUpdate = (id) => {
    setUpdate(!update);
    setId(id);
  }

  function updateList(todo) {
    setValue(todo); 
    props.updateItem(id, value)
  }

  let activeLest = props.list;




  if (settingsContext.hideComplete) {
    activeLest = props.list.filter(item => !item.complete);
  }


  const indexOfLastItem = currentPage * settingsContext.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - settingsContext.itemsPerPage;
  activeLest = activeLest.slice(indexOfFirstItem, indexOfLastItem); 


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
  return (
    <>
      <div id="listGroup">
        <div id="settings">
          <Button
            id="hideButton"
            variant={settingsContext.hideComplete === true ? 'success' : 'secondary'}
            onClick={() => settingsContext.setHideComplete(!settingsContext.hideComplete)}>
              {settingsContext.hideComplete === true ? `Show Completed Tasks` : `Hide Completed Tasks`}
          </Button>
          <div id="sortDropDown">
           
         
          </div>
        </div>
        <When condition={update === true}>
          <Form>
            <FormControl placeholder="update task" onChange={(e) => setValue(e.target.value)} />
            <Button onClick={(e) => {handleSubmit(e); toggleUpdate(id);}}>Submit</Button>
          </Form>
        </When>
        {activeLest.map(item => (
          <Card id="listItem">
            <Card.Header>
              <Badge
                pill 
                variant={item.complete === true ? 'danger' : 'success'}
                className="m-3"
                onClick={() => props.toggleComplete(item._id)}
                >
                {item.complete === true ? `Complete` : `Pending`}
              </Badge>
              <span className="mr-auto">{item.assignee}</span>
              <Button 
                variant="light" 
                type="submit" 
                onClick={() => props.deleteItem(item._id)}
                className="float-right text-secondary font-weight-bold"
                >
                  X
                </Button>
            </Card.Header>
            <Card.Body id="cardBody">
              <Card.Text
              id="taskText"
              className={`complete-${item.complete.toString()}`}
              key={item.id}
              onClick={() => toggleUpdate(item._id)}
              >
                {item.text}
              </Card.Text>
              <Card.Text id="diff" className="text-sm-right">
                Difficulty: {item.difficulty}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        <div id="settingsBottom">
          <Pagination itemsPerPage={settingsContext.itemsPerPage} totalItems={props.list.length} paginate={paginate}/>
          <p id="totalDisplay">{props.list.length} total items</p>
          <div id="selectPerPage">
            <label id="perPagelabel" htmlFor="perPage">Items Displayed Per Page(select):</label>
            <select id="perPageSelect" name="perPage" onChange={e => settingsContext.setItemPerPage(e.target.value)}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value={props.list.length}>ALL</option>
            </select>
          </div>
        </div>
             <SettingForm /> 
      </div>
    </>
   );
}

export default ToDoList;
