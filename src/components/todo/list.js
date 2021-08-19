import React from 'react';
import { useContext } from 'react';
import { SettingContext } from '../../context/setting';
import { useState, useEffect } from 'react';
import { Button, Card } from '@blueprintjs/core';

function List(props) {
   
  const context = useContext(SettingContext);
  

  const [currentPage, setCurrentPage] = useState(1);
  const [activeList, setActiveList] = useState(
    props.list.slice(0, context.itemsPerPage)
  );
  const [numOfPages, setNumOfPages] = useState(
    Math.ceil(props.list.length / context.itemsPerPage)
  );

  useEffect(() => {
    // setCurrentPage(props.list.slice(0, context.itemsPerPage));
    setNumOfPages(Math.ceil(props.list.length / context.itemsPerPage));
  }, [props.list,context.itemsPerPage]);

  useEffect(() => {
    const start = (currentPage - 1) * context.itemsPerPage;
    const end = start + context.itemsPerPage;
    setActiveList(props.list.slice(start, end));
  }, [currentPage,context.itemsPerPage,props.list]);


//   if (context.hideComplete) {
   
//     activeList.props= props.list.filter(item => !item.complete);
//   }
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
  const changePage = (pageNumber) => {
    if (pageNumber == currentPage) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
     {/* <Button
           
            variant={context.hideComplete === true ? 'success' : 'secondary'}
            onClick={() => context.setHideComplete(!context.hideComplete)}>
              {context.hideComplete === true ? `Show Completed Tasks` : `Hide Completed Tasks`}
          </Button>
   */}
      {activeList.map((item) => (
        <Card key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
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
