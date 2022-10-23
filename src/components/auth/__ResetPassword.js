import React,{useState } from 'react'
import authapi from '../../api/authapi';
import { Link, useParams } from 'react-router-dom';

export const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [message, setMessage] = useState("");
    let { token } = useParams();
    console.log(token)
    const handleEmialState = (e)=>{
        setEmail(e.target.value)
    }

    const handlepassword = (e)=>{
        setpassword(e.target.value)
    }

    const handleConfirmPass = (e)=>{
        setconfirmPass(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password===confirmPass){
        authapi.changepassword({email:email,password:password,token:token})
        .then((result)=>{
            setMessage('Password Update Successfull')
        }).catch((err)=>{
            setMessage('Something went Wrong')
        })
    }else{
        setMessage('Something went Wrong')
    }


      }
    
  return (
    <><div>ResetPassword</div>
    <h1>{message}</h1>
    <form onSubmit={handleSubmit}>
          <p>
              <label id="reset_pass_lbl">Email address</label><br />
              <input onChange={handleEmialState} type="email" name="email" required />
          </p>
          <p>
              <label id="reset_pass_lbl">Password</label><br />
              <input onChange={handlepassword} type="password" name="email" required />
          </p>
          <p>
              <label id="reset_pass_lbl">Confirm password</label><br />
              <input onChange={handleConfirmPass} type="password" name="email" required />
          </p>
          <p>
              <button id="sub_btn" type="submit">Send password reset email</button>
          </p>
          <p><Link to="/">Back to Homepage</Link>.</p>
      </form></>
  )
}
