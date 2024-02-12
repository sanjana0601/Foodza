import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
// import '../styles/Signup.css'
import '../styles/Login.css'

function Signup() {
    const Router=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    Router("/Login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        // <div className="container">

        // <div className="Signup">

        //     <h1>Signup</h1>

        //     <form action="POST">
        //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        //         <input type="submit" onClick={submit} />

        //     </form>

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/login">Login Page  </Link>
        //     {/* <button onClick={()=>{ Router("/Login")}} >login</button> */}
        // </div>
        // </div>
         <div class="login">
      <h1 style={{marginBottom:'10%' }}>Sign up</h1>
      <form method="post">
        <input
        style={{marginBottom:'10%' }}
          type="email"
          name="u"
          placeholder="Username"
          onChange={(e) => { setEmail(e.target.value) }}
          required="required"
        />
        <input
        style={{marginBottom:'10%' }}
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          onChange={(e) => { setPassword(e.target.value) }} 
        />
        <button style={{marginBottom:'10%' }} type="submit" onClick={submit}  class="btn btn-primary btn-block btn-large">
          Signup
        </button>
        <Link to="/login">Login Page  </Link>
      </form>
    </div>
    )
}

export default Signup