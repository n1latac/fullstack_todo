// import axios from 'axios'
// import CONSTANTS from '../constants'

// const axiosInstance = axios.create({
//     baseURL: CONSTANTS.API_BASE
// })

// axiosInstance.interceptors.request.use((config)=>{
//     const accessToken = localStorage.getItem('accessToken')
//     if(accessToken){
//         config.headers = {
//             ...config.headers,
//             'Authorization': `Bearer ${accessToken}`
//         }
//     }
//     return config
// },(err)=>{
//     return Promise.reject(err)
// })

// axiosInstance.interceptors.response.use((response)=>{
//     if(response.data.tokens && localStorage.getItem('refreshToken')){
//         const {data: {tokens: {accessToken, refreshToken}}} = response
//         localStorage.setItem('accessToken',accessToken)
//         localStorage.setItem('refreshToken', refreshToken)
//     }
//     return response
// },(err)=>{
//     if(err.response.status === 403 && localStorage.getItem('refreshToken')){
//         refreshUser()
//     }
//     if(err.response.status === 401){
//         history.replace('/')
//     }
//     return Promise.reject(err)
// })

// export default axiosInstance