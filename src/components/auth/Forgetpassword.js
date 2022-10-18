import React,{useState } from 'react'
import { Link } from 'react-router-dom'
import authapi from '../../api/authapi';
const Forgetpassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState([]);


    const handleEmialState = (e)=>{
        setEmail(e.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email)
        authapi.forgetpassword({email:email})
        .then((result)=>{
            setMessage("Message Send")
        }).catch(err => {
            console.log(err);
            let rerr = JSON.parse(err.request.responseText)
            let errormessage = []
            errormessage.push(rerr.message)
            errormessage.push(rerr.errors.email)
            setMessage(errormessage)
            // setError(errormessage)
           
        });

      }
  return (
    <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            {/* {message.map((data)=>
       <h2 style={{color:'red'}}>{data}</h2>
        )} */}

           
            <form onSubmit={handleSubmit}>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input onChange={handleEmialState} type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/reg">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
  )
}

export default Forgetpassword