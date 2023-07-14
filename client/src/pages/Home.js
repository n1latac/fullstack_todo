import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
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
  callback(values)
    .then(res=>{
      props.sendUser(res)
      //localStorage.setItem('accessToken', res.tokens.accessToken)
      //localStorage.setItem('refreshToken', res.tokens.refreshToken)
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