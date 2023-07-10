import CONSTANTS from "../constants"
import { history } from "../BrowserHistory"
import { refreshSession } from "./userApi"

export const getTasks = async() => {
  const token = localStorage.getItem('accessToken')
  const response = await fetch(`${CONSTANTS.API_BASE}/task/`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  if(response.status === 400){
    const res = await response.json()
    await Promise.reject(res.err)
  }
  if(response.status === 403){
    await refreshSession()
    await getTasks()
  }
  
  return await response.json()
}

export const pushTask = async(data)=>{
  const token = localStorage.getItem('accessToken')
  const response = await fetch(`${CONSTANTS.API_BASE}/task/`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
  })
  if(response.status === 400){
    const res = await response.json()
    await Promise.reject(res.error)
  }
  if(response.status === 403){
    //const error = await response.json()
    await refreshSession()
    return await pushTask(data)
    //history.push('/')
    //return Promise.reject(error)
  }
  return await response.json()
}

export const deleteTask = async (taskId) => {
  const token = localStorage.getItem('accessToken')
  const response = await fetch(`${CONSTANTS.API_BASE}/task/${taskId}`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  if(response.status === 403){
    await refreshSession()
  }else{
    return response.json()
  }
}
