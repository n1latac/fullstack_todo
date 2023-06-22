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
