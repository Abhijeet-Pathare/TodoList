import React from 'react'

const TodoItem = (props) => {

    const myList = props.todo.map((todo)=>{
        return(
            <>
            <h3 key={todo.id}>{todo.id}</h3>
            <p>{todo.title}</p>
            <button className='btn btn-danger btn-sm' onClick={()=>{props.onDelete(todo)}}>Delete</button>
            <hr/>
            </>
        )
    });

  return (
    
        <div>
            <h3>{myList}</h3>
            {/* <h1>Sr.No {props.todo[0].title}</h1>
            <h1>Todo Items</h1>
            <h3>{props.title}</h3> */}
        </div>
    
  )
}

export default TodoItem