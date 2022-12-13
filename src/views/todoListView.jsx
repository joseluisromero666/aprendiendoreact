
/*import React, { useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 } from "uuid";
*/

import React from 'react'

const TodoListView = () => {
  return (
    <div>TodoListView</div>
  )
}

export default TodoListView

/*
          AQUI YA NO FUNCIONA 
 export function TodoListView(){
    const todoTaskRef = useRef();

    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1", completed: false }
    ]);

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === "") return;
        else {
            setTodos(
                (prevTodos) => {
                    return [...prevTodos, { id: v4(), task, completed: false }]
                }
            )
            todoTaskRef.current.value = null
        }

    }
    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find(
            (todo) => todo.id === id
        );
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleClearAll = () => {
        const newTodos = todos.filter(
            (todos) => !todos.completed
        );
        setTodos(newTodos);

    }
    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleTodoAdd}>➕</button>
            <button onClick={handleClearAll}>🗑️</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por completar</div>
        </React.Fragment>
    );
}*/