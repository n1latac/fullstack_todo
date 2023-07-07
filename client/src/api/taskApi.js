import CONSTANTS from "../constants"
import { history } from "../BrowserHistory"

export const getTasks = async() => {
  const token = localStorage.getItem('token')
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
  
  return await response.json()
}

export const pushTask = async(data)=>{
  const token = localStorage.getItem('token')
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
    const error = await response.json()
    history.push('/')
    return Promise.reject(error)
  }
  return await response.json()
}
