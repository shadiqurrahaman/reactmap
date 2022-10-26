import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Formik,Form} from 'formik';
// import store, { storeToken } from '../../store';
import { TextFild } from './TextFild';
import * as yup from 'yup';
import authapi from '../../api/authapi';
// import store from '../../store';
import { setToken } from '../../store/saga';
import {useSelector,useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions';


export const Login = () => {
  const [error,setError] = useState([]);
   const dispatch = useDispatch()
  const navigate = useNavigate();
  let validate =yup.object(
    {
      email: yup.string().email('Emial is invalide').required('Emial is Required'),
      password: yup.string().min(6,'Password is at least 6 charecter').required('Password is Required')
    }
  )
  // const selectedData = useSelector((state)=>{
  //   if(state.token){
  //    console.log(state)
  //   }
  // })

  const handleSubmit = async (values) => {

    // dispatch(loginUser(values))
  
        const data = authapi.login({email:values.email,password:values.password});
        data.then((result)=>{
            // store.dispatch(storeToken(result.access_token));
            dispatch(loginUser(result.access_token))
            navigate("/homepage")
        }).catch(err => {
            console.log(err.response.data.error);
            setError("Your username or password my be wrong");
        });
  }

  const initialValues = {
    email:'',
    password:''
  }


  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validate}
    onSubmit={(values) => handleSubmit(values,validate) }
    >
{formik=>( 
   <div>
       <h1 className='my-4 font-weight-bold-display-4'>Sign In</h1>
       <h4 style={{color: "red"}} > {error}</h4>
      <Form>
     <TextFild  label="Emial" name="email" type="email"/>
     <TextFild label="Password" name="password" type="password"/>
     <button className='btn btn-dark mt-3' type='submit'>Sign In</button>

     <p>First time? <Link to="/reg">Create an account</Link>.</p>
     <p><Link to="/forgetpassword"><label className="right-label">Forget password?</label></Link></p>
  
     </Form>
     
   </div>
)} 
    </Formik>
  )
}
