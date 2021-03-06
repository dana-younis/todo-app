import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../context/auth';
export const ListContext = React.createContext();

function List(props) {
  const [list, setList] = useState([]);
  const [values, setValues] = useState({});
  const [itemNumber, setItemNumber] = useState();
  const [test1, setTest1] = useState('on');
  const [done, setDone] = useState([]);
  const { user } = useContext(AuthContext);

  let API_TO = 'https://api-js401.herokuapp.com/api/v1/todo';

  async function handleSubmit(event) {
    if (user.capabilities.includes('create')) {
      if (event) event.preventDefault();
      values.id = uuid();
      values.complete = false;

      let item1 = [...list, values];
      let item = {
        complete: values.complete,
        difficulty: values.difficulty,
        id: values.id,
        text: values.text,
        assignee: values.assignee,
      };

      let test1 = await axios.post(API_TO, item);
      let c = (await axios.get(API_TO)).data.results;

      setList(c);
    } else {
      alert("you can't creat");
    }
  }

  function handlePaginationChange(e) {
    if (user.capabilities.includes('update')) {
      localStorage.setItem('itemNumber', JSON.stringify(e.target.value));
      setItemNumber(JSON.parse(localStorage.getItem('itemNumber')));
    } else {
      alert("you can't edit");
    }
  }
  function handleChange(event) {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  let getList = async () => {
    let c = (await axios.get(API_TO)).data.results;
    setList(c);
  }; // eslint-disable-line react-hooks/exhaustive-deps
  let getItemNum = async () => {
    if (JSON.parse(localStorage.getItem('itemNumber'))) {
      setItemNumber(Number(JSON.parse(localStorage.getItem('itemNumber'))));
    }
    return () => {
      let localList = Number(JSON.parse(localStorage.getItem('itemNumber')));

      setItemNumber(localList);
    };
  };

  useEffect(async () => {
    getItemNum().then(() => {
      console.log('done');
    });

    getList().then(() => {
      console.log('done');
    });
    let c = (await axios.get(API_TO)).data.results;
    setList(c);
  }, []);
  function displayComplete() {
    if (user.capabilities.includes('update')) {
      if (done === list)
        setDone(() => done.filter((item) => item.complete !== true));
      else setDone(list);

      done === list
        ? setTest1(`Show Completed Tasks`)
        : setTest1(`Hide Completed Tasks`);
    } else {
      alert("you can't update");
    }
  }

  async function toggleComplete(item) {
    if (user.capabilities.includes('update')) {
      item.complete = !item.complete;
      let l = {
        complete: item.complete,
      };
      let test1 = await axios.put(`${API_TO}/${item._id}`, l);
      let c = (await axios.get(API_TO)).data.results;
      setList(c);
    } else {
      alert("you can't update");
    }
  }

  async function deleteItem(_id) {
    if (user.capabilities.includes('delete')) {
      let test1 = await axios.delete(`${API_TO}/${_id}`);

      let c = (await axios.get(API_TO)).data.results;

      setList(c);
    } else {
      alert("you can't delete");
    }
  }

  return (
    <ListContext.Provider
      value={{
        list,
        handleSubmit,
        handleChange,
        toggleComplete,
        handlePaginationChange,
        test1,
        setTest1,
        deleteItem,
        itemNumber,
        setItemNumber,
        setList,
        displayComplete,
        done,
        setDone,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
}

export default List;
