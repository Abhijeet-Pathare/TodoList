import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTodo = (props) => {

  const [title,setTitle] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodo(title);

  }

  const onChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} type="text" placeholder="Add todo..." onChange={onChangeHandler} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
    </div>
  )
}

export default AddTodo