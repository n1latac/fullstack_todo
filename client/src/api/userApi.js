import CONSTANTS from "../constants"
import { history } from "../BrowserHistory"
import  axiosInstance  from "./axios"

export const register = async(userData)=>{
  const {data} = await axiosInstance.post('/user/register', userData)
  return data
}

// export const registerUser = async(data) => {
//   const response = await fetch(`${CONSTANTS.API_BASE}/user/register`,{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//   })
//   if(response.status === 400){
//     const res = await response.json()
//     await Promise.reject(res.err)
//   }
//   return await response.json()
// }

export const loginUser = async(userData) => {
  const {data} = await axiosInstance.post('/user/login',userData)
  return data
}

// export const loginUser = async(userData) =>{
//   const response = await fetch(`${CONSTANTS.API_BASE}/user/login`,{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//   })
//   if(response.status === 400){
//     const res = await response.json()
//     await Promise.reject(res.error)
//   }
//   const {data, tokens} = await response.json()
//   localStorage.setItem('accessToken', tokens.accessToken)
//   localStorage.setItem('refreshToken', tokens.refreshToken)
//   return data
// }

export const checkAuth = async() => {
  const accessToken = localStorage.getItem('accessToken')
  if(accessToken){
    const response = await fetch(`${CONSTANTS.API_BASE}/user/`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    if(response.status === 400){
      const res = await response.json()
      await Promise.reject(res.err)
    }
    if(response.status === 403){
       await refreshSession()
       return await checkAuth()
    }else{
      console.log(response.status)
      return await response.json()
    }
   
  }else{
    history.replace('/')
  }
 
}

export async function refreshSession(){
  const refreshToken = localStorage.getItem('refreshToken')
  const res = await fetch(`${CONSTANTS.API_BASE}/user/refresh`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({refreshToken})
  })
  if(res.status === 401){
    return history.push('/')
  }
    const {tokens: tokenPair} = await res.json()
    console.log(tokenPair)
    localStorage.setItem('refreshToken', tokenPair.refreshToken)
    localStorage.setItem('accessToken', tokenPair.accessToken)
  
    return 
}