import React from 'react'
import styles from './TodoItem.module.css'
import {format} from 'date-fns'

function TodoItem(props) {
    const {todo:{body, deadline, status}} = props
  return (
    <li>
        <span>{body}</span>
        <span>{format(new Date(deadline), 'MM/dd/yyyy')}</span>
        <span>{status}</span>
    </li>
  )
}

export default TodoItem