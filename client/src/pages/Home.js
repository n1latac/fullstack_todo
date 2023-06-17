import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api'
import SignIn from '../components/SignInForm'
import SignUp from '../components/SignUpForm'

function Home(props) {
const [state, setState] = useState(true)
const [data, setData] = useState()
const [error, setError] = useState()
const navigate = useNavigate()

useEffect(()=>{
  if(data){
    registerUser(data)
    .then(res=>{
      props.sendUser(res)
      navigate('/tasks')
    })
    .catch(error=>{
      setError(error)
    })
  }
},[data])

const buttonHandler = () => {
    setState(state => !state)
}

const getData = (userData) => {
  setData(userData)
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