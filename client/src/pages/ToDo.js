import React, { useEffect, useReducer, useState } from 'react'
import ToDoList from '../components/ToDoList'
import {getTasks} from '../api/taskApi'
import { useNavigate } from 'react-router-dom'
import {pushTask} from '../api/taskApi'
import { checkAuth } from '../api/userApi'
import { history } from '../BrowserHistory'



const initialState = {
  body: '',
  status: '',
  deadline: new Date()
}

function reducer(state, action){
  console.log(state)
  switch (action.type){
    case 'body':
      return {
        ...state,
        body: action.body
      }
    case 'status':
      return {
        ...state,
        status: action.status
      }
    case 'deadline':
      return {
        ...state,
        deadline: action.deadline
      }
    default: throw new Error('something wrong')
  }
}


function ToDo(props) {
  const [todo, setTodo] = useState([])
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer,initialState)

  const token = localStorage.getItem('token')

  useEffect(()=>{
    if(!props.user){
      if(token){
        checkAuth(token)
        .then(userData=>{
          props.sendUser(userData.data)
        })
        .catch(error=>{
          console.log(error)
          history.push('/')
        })
        //делаем запрос на получение юзера
      }else{
        return navigate('/')
      }
    }else{
      getTasks(props.user._id)
      .then(result=>{
        setTodo(result.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    
    
  },[props.user])


  function buttonHandler(){
    pushTask(state, props.user._id)
    .then(({data})=>{
      const newTodo = [...todo, data]
      setTodo(newTodo)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <h1>Tasks</h1>
      <div style={{border: '1px solid black'}}>
        <h3>add task</h3>
        <input type='text' name='body' placeholder='body' value={state.body} onChange={e=>dispatch({type: 'body', body: e.target.value})}/>
        <input type='text' name='status' placeholder='status' value={state.status} onChange={e=>dispatch({type: 'status', status: e.target.value})}/>
        <input type='date' name='deadline' value={state.value} onChange={e=>dispatch({type: 'deadline', deadline: e.target.value})}/>
        <button onClick={buttonHandler}>send</button>
      </div>
   <ToDoList todo={todo}/>
    </div>
  )
}

export default ToDo