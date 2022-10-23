import React,{useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import store, { storeToken } from '../../store';
import authapi from '../../api/authapi';
const Register = () => {
    
    // const [email, password,checkbox] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error,setError] = useState([]);
    const navigate = useNavigate();

    const handleEmialState = (e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordState = (e)=>{
        setPassword(e.target.value)
    }

    const handleNameState = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = authapi.register({name:name,email:email,password:password})
        data.then((result)=>{
            console.log(result)
            store.dispatch(storeToken(result.access_token));
            navigate("/homepage")
        }).catch(err => {
            let rerr = JSON.parse(err.request.responseText)
            let errormessage = []
            errormessage.push(rerr.message)
            errormessage.push(rerr.errors.email)
            errormessage.push(rerr.errors.name)
            console.log(rerr);
            setError(errormessage)
           
        });
      }

    //   console.log(name)

  return (
    <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
                       
            {error.map((data)=>
      <h4 style={{color: "red"}} > {data}</h4>
        )}

            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input onChange={handleNameState} type="text" name="name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input onChange={handleEmialState} type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input onChange={handlePasswordState} type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
  )
}

export default Register