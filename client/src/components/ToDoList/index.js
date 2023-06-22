import React from 'react'

function ToDoList(props) {
  return (
    <ul>
        {props.todo.map(td=><li>{td}</li>)}
    </ul>
  )
}

export default ToDoList