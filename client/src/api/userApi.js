import CONSTANTS from "../constants"
export const registerUser = async(data) => {
  const response = await fetch(`${CONSTANTS.API_BASE}/user/register`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  if(response.status === 400){
    const res = await response.json()
    await Promise.reject(res.err)
  }
  return await response.json()
}

export const loginUser = async(data) =>{
  const response = await fetch(`${CONSTANTS.API_BASE}/user/login`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  if(response.status === 400){
    const res = await response.json()
    await Promise.reject(res.error)
  }
  return await response.json()
}

export const checkAuth = async(token) => {
  const response = await fetch(`${CONSTANTS.API_BASE}/user/${token}`)
  if(response.status === 400){
    const res = await response.json()
    await Promise.reject(res.err)
  }
  if(response.status === 403){
    const res = await response.json()
    await Promise.reject(res.err)
  }
  return await response.json()
}