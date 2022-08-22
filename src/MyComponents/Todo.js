import React from 'react';
import TodoItem from './TodoItem';

const Todo = (props) => {
  return (
    <div className='container'>
        <TodoItem todo={props.data} onDelete={props.onDelete} />

        {/* <h1>{todos.todos[0].id}</h1>
        <h3>{todos.todos[0].title}</h3>
        <hr/>
        <h1>{todos.todos[1].id}</h1>
        <h3>{todos.todos[1].title}</h3>
        <hr/> */}
    </div>
  )
}

export default Todo