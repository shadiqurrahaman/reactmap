import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import store, { storeToken } from '../../store';
import authapi from '../../api/authapi';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState([]);
    const navigate = useNavigate();

    const handleEmialState = (e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordState = (e)=>{
        setPassword(e.target.value)
    }

    console.log(store.getState('token'));
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = authapi.login({email:email,password:password});
        data.then((result)=>{
            store.dispatch(storeToken(result.access_token));
            navigate("/homepage")
        }).catch(err => {
            console.log(err.response.data.error);
            setError("Your username or password my be wrong");
        });
        
        
      }
   
  return (
    <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <h4 style={{color: "red"}} > {error}</h4>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username or email address</label><br/>
                    <input onChange={handleEmialState} type="email" name="name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forgetpassword"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input onChange={handlePasswordState} type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/reg">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>

        </div>
  )
}
