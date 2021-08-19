import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Header from './header';
import { v4 as uuid } from 'uuid';
import List from './list.js';
import ToDoForm from './form';
import SettingForm from './settingForm.js';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
   const data={id:uuid(),text:item.text,assignee:item.assignee , complete:false}
    // item.id = uuid();
    // item.complete = false;
    setList([...list, data]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
     <Header incomplete={incomplete}/>
     <SettingForm />
      <ToDoForm handleChange={handleChange} handleSubmit={handleSubmit}/>

     <List list={list} toggleComplete={toggleComplete} />

    </>
  );
};

export default ToDo;
