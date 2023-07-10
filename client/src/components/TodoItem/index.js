import React from 'react'
import styles from './TodoItem.module.css'
import {format} from 'date-fns'
import { deleteTask, getTasks } from '../../api/taskApi'

function TodoItem(props) {
  const {todo:{body, deadline, status, _id, authorId}, setTodo} = props

console.log(props)
  const deleteOneTask = async() => {
    
    await deleteTask(_id)
    .then(({message})=>{
      getTasks(authorId).then(({data})=>{setTodo(data)}).catch((err)=>{console.log(err)})
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  console.log(props)
  return (
    <li>
        <span>{body}</span>
        <span>{format(new Date(deadline), 'MM/dd/yyyy')}</span>
        <span>{status}</span>
        <button onClick={()=>deleteOneTask()}>X</button>
    </li>
  )
}

export default TodoItem