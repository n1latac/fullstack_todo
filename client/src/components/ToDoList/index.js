import React from 'react'
import TodoItem from '../TodoItem'

function ToDoList(props) {
  return (
    <ul>
        {props.todo.map(td=><TodoItem todo={td} key={td._id} setTodo={props.setTodo}/>)}
    </ul>
  )
}

export default ToDoList