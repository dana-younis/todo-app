import React, { useEffect, useState } from 'react';
import ToDoForm from './form.js';
import ToDoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import useHook from '../hooks/formHooks.js';
import './todo.scss';

import Header from './header'


function ToDo() {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const deleteItem = (id) => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let newList = list.filter(listItem => listItem._id !== id);
      setList(newList);
    }
  }

  const updateItem = (id, val) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.text = val;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  }

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };


 
  useEffect(() => {
    if(list.length >= 1) (document.title = `${list.filter(item => !item.complete).length} Items To Complete`)
  }, [list]);

  return (
    <>
    <Header/>
      <Navbar bg="dark" variant="dark" id="navBlack">
        <Navbar.Brand>To Do List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
      </Navbar>

      <Card className="todo">
        <ToDoForm addItem={addItem} />
        <ToDoList
          list={list}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      </Card>
    </>
  );
}

export default ToDo;
