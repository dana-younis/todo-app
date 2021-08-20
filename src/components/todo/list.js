import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../context/setting';
import { useState, useEffect } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';

function List(props) {
  const context = useContext(SettingsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [activeList, setActiveList] = useState(
    props.list.slice(0, context.itemsPerPage)
  );
  const [numOfPages, setNumOfPages] = useState(
    Math.ceil(props.list.length / context.itemsPerPage)
  );

  //============sorting==================\\
  // if (context.sortField === 'assignee') {
  //   activeList.sort((a, b) => {
  //     if (a.assignee.toLowerCase() > b.assignee.toLowerCase()) return 1;
  //     if (a.assignee.toLowerCase() < b.assignee.toLowerCase()) return -1;
  //     return 0;
  //   });
  // }
  // else if (context.sortField === 'difficulty') {
  //   activeList.sort((a, b) => {
  //     return a.difficulty - b.difficulty;
  //   });
  // }
  // else if (context.sortField === 'task') {
  //   activeList.sort((a, b) => {
  //     if (a.text.toLowerCase() > b.text.toLowerCase()) return 1;
  //     if (a.text.toLowerCase() < b.text.toLowerCase()) return -1;
  //     return 0;
  //   });
  // }

  useEffect(() => {
    setActiveList(props.list.slice(0, context.itemsPerPage));
    setNumOfPages(Math.ceil(props.list.length / context.itemsPerPage));
  }, [props.list, context.itemsPerPage]);

  useEffect(() => {
    const start = (currentPage - 1) * context.itemsPerPage;
    const end = start + context.itemsPerPage;
    setActiveList(props.list.slice(start, end));
  }, [currentPage, context.itemsPerPage, props.list]);

  const PagesList = () => {
    const pages = [];
    if (currentPage > 1)
      pages.push(
        <Button
          onClick={() => {
            changePage(currentPage - 1);
          }}
        >
          Prev
        </Button>
      );

    for (let index = 0; index < numOfPages; index++) {
      pages.push(
        <Button
          onClick={() => {
            changePage(index);
          }}
          key={index}
        >
          {index}
        </Button>
      );
    }

    if (currentPage < numOfPages)
      pages.push(
        <Button
          onClick={() => {
            changePage(currentPage + 1);
          }}
        >
          next
        </Button>
      );
    return pages;
  };

  ///////////////////////////show
  if (context.hideComplete) {
    useEffect((e) => {
  
      setActiveList(props.list.filter((items) => !items.complete));
    }, [props.list]);
  }



  

  const changePage = (pageNumber) => {
    if (pageNumber == currentPage) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Button onClick={() => context.setHideComplete(!context.hideComplete)}>
        {context.hideComplete === true
          ? `Show Completed Tasks`
          : `Hide Completed Tasks`}
      </Button>

      {/* <div >
            <label  htmlFor="sortby">Sort By:</label>
            <select " name="sortby" onChange={e => context.setSortField(e.target.value)}>
              <option value="assignee">Assignee</option>
              <option value="difficulty">Difficulty</option>
              <option value="task">Task</option>
            </select>
          </div> */}

      {activeList.map((item) => (
        <Card key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
          <small>Difficulty: {item.difficulty} </small>
          </p>
          <div onClick={() => props.toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </Card>
      ))}
      <PagesList />
    </>
  );
}

export default List;
