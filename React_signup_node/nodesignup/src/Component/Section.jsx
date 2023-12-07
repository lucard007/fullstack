import React, {useState} from 'react'
import axios from "axios"


const Section = () => {
  const [userName, setuserName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  let details = {
    userName,
    email,
    password
  }

  const signup = () => {
    console.log(details);
    axios.post("http://localhost:4000/users/signup", details).then((res)=>{
      console.log(res);
      alert(res.data.message)
    }).catch((err)=>{
      console.log(err);
      alert(err.response.data.message)
    })
  }
  return (
    <>
        <center>
            <div className='one'>
                <h1>Sign Up Now!!!!</h1> <br />
                <input onChange={(e)=>setuserName(e.target.value)} type="text" placeholder='username' name='username' /> <br /> <br />
                <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='email' name='email' /> <br /> <br />
                <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='password' name='firstname' /> <br /> <br />
            </div>
            <div className='two'>
                <p>By clicking Sign Up, you agree to our <a href="">Terms</a>, <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a>. <br /> You may receive SMS notifications from us and can opt out at any time.</p>
            </div>
            <button onClick={signup}>Sign Up !!!!</button>
        </center>
    
    </>
  )
}

export default Section