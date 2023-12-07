import axios from 'axios'
import React from 'react'

const Dashboard = () => {
    const token = localStorage.getItem('token')
    axios.get("http://localhost:4000/users/verify",{
        headers: {
            authorization: `bearer ${token}`
        }
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        alert(err.response.data.message )
        console.log(err)
    })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard