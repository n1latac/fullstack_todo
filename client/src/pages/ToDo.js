import React, { useEffect, useState } from 'react'
import ToDoList from '../components/ToDoList'

function ToDo() {
  const [state, setState] = useState([])

  useEffect(()=>{

  },[])
  return (
    <div>
      <h1>Tasks</h1>
    <ToDoList todo={state}/>
    </div>
  )
}

export default ToDo