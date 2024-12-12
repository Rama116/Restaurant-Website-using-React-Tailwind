// import React from 'react'
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Signup = () => {

      const [name,setName] = useState()
      const [email,setEmail] = useState()
      const [password,setPassword] = useState()
      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => {console.log(result)
          navigate('/Login')
        })
        .catch(err => console.log(err))
      }

  return (
    <>
         <div className="h-screen w-screen bg-slate-50 flex flex-row justify-center items-center">
            <form onSubmit={handleSubmit} 
            className="h-[29rem] w-[25rem] md:w-[26rem] border-2 border-orange-700 rounded-2xl bg-white box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); flex flex-col gap-6 justify-center items-center">
                <h1 className="text-2xl  text-black font-bold hover:text-orange-400">SignUp</h1>
                <input className="px-9 py-4 border-b-2 border-orange-400 outline-none bg-orange-50" type="text" name="user" id="user" placeholder="UserName" required 
                  onChange={(e) => setName(e.target.value)}
                  />
                <input className="px-9 py-4 border-b-2 border-orange-400 outline-none bg-orange-50" type="email" name="email" id="em" placeholder="E-Mail" required
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <input className="px-9 py-4 border-b-2 border-orange-400 outline-none bg-orange-50" type="password" name="pass" id="ps" placeholder="Password" required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                <p className="font-semibold text-orange-400">Already Registered?<Link to="/Login" className="text-black"> Login</Link></p>
                </div>
                <input type="submit" value="Submit" className="px-10 py-3 bg-orange-300 hover:text-white text-black font-semibold hover:bg-orange-500 border-4 border-orange-300 hover:border-orange-500 rounded-md"/>
            </form>
        </div>
    </>
  )
}

export default Signup