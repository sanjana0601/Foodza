import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "exist") {
            history("/", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    // <div className="login">

    //     <h1>Login</h1>

    //     <form action="POST">
    //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
    //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
    //         <input type="submit" onClick={submit} />

    //     </form>

    //     <br />
    //     <p>OR</p>
    //     <br />

    //     <Link to="/signup">Signup Page</Link>

    // </div>
    <div class="login">
      <h1 style={{marginBottom:'10%' }}>Login</h1>
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
        <button type="submit" onClick={submit} class="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}
export default Login