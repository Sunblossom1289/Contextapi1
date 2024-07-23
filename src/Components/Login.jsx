import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'
import "../Components/Main.css";

const Login = () => {
    const [username,setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(userContext)
    

    const handleSubmit =(e) =>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input className=' username' type="text"  onChange={(e) =>setUserName(e.target.value)} value ={username} placeholder='username' />
      <input className='password' type="text"  onChange={(e) =>setPassword(e.target.value)} value={password} placeholder='password' /><br/>
      <button  className="submit" onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
