
import React, { useEffect, useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function ToDoForm(props) {
  return (
    <Card id="formCard">
      <h3>Add To Do Item</h3>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group id="formGroupMargin">
          <Form.Label>To Do Item:</Form.Label>
          <Form.Control onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
        </Form.Group>
        <Form.Group id="formGroupMargin">
          <Form.Label>Assigned To:</Form.Label>
          <Form.Control onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </Form.Group>
        <Form.Group id="diffSlider">
          <Form.Label>Set Difficulty:</Form.Label>
          <Form.Control 
            defaultValue="1" 
            type="range" 
            min="1" 
            max="5" 
            name="difficulty" 
            onChange={props.handleInputChange} 
            />
        </Form.Group>
        <Button id="formGroupMargin" type="submit">Add Item</Button>
      </Form>
    </Card>
  );
}
export default ToDoForm;

