import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/userApi'
import SignIn from '../components/SignInForm'
import SignUp from '../components/SignUpForm'

function Home(props) {
const [state, setState] = useState(true)
const [error, setError] = useState()
const navigate = useNavigate()



const buttonHandler = () => {
    setState(state => !state)
}

const getData = ({callback, values}) => {
  console.log(callback)
  callback(values)
    .then(res=>{
      props.sendUser(res)
      localStorage.setItem('token', res.token)
      return navigate('/tasks')
    })
    .catch(error=>{
      setError(error)
    })
}
const buttonText = state ? 'SignUp' : 'SignIn' 
  return (
    <>
        <header>
            <button onClick={buttonHandler}>{buttonText}</button>
        </header>
        <main>
        {state ? <SignIn getData={getData}/> : <SignUp getData={getData}/>}
        </main>
        {error && <div>{error}</div>}
    </>
  )
}

export default Home