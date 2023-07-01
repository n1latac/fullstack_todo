import CONSTANTS from "../constants"
export const getTasks = async(userId) => {
  const response = await fetch(`${CONSTANTS.API_BASE}/task/${userId}`)
  if(response.status === 400){
    const res = await response.json()
    await Promise.reject(res.err)
  }
  return await response.json()
}

export const pushTask = async(data, userId)=>{
  const response = await fetch(`${CONSTANTS.API_BASE}/task/${userId}`,{
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
