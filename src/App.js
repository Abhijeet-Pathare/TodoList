import React, { useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './MyComponents/Todo';
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';
import Footer from './MyComponents/Footer';

function App() {

  const [todos,setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos);
    }else{
      return [];
        }
  });

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  // const [todos,setTodos] = useState([
  //   {
  //     id:1,
  //     title:"Go for a trip"
  //   },
  //   {
  //     id:2,
  //     title:"Go to school"
  //   }

  // ]);

  const addTodo = (title) => {

    let id;
    if( todos.length === 0 ){
      id=1;
    } else{
      id = todos[(todos.length-1)].id + 1;
    }

    const myObj = {
      id:id,
      title:title
    }
    setTodos([...todos,myObj]);
    
  }

  const onDelete = (todo) => {
   console.log("I am deleting a todo ",todo);
   setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify("todos"));
  }

  return (
    <>
    <Header />
    <div className='container'>
    <AddTodo addTodo={addTodo} />
    </div>
    <Todo c data={todos} name="Abhijeet" onDelete={onDelete}/>
    <Footer />
    </>
   
  );
}

export default App;
