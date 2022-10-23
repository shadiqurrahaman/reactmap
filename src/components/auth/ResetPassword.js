import React, { useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { Formik,Form} from 'formik';
import store, { storeToken } from '../../store';
import { TextFild } from './TextFild';
import * as yup from 'yup';
import authapi from '../../api/authapi';
export const ResetPassword = () => {

    let { token } = useParams();
    const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let validate =yup.object(
    {
      email: yup.string().email('Emial is invalide').required('Emial is Required'),
      password: yup.string().min(6,'Password is at least 6 charecter').required('Password is Required'),
      confirmpassword:yup.string().min(6,'Confirm Password is at least 6 charecter').required('Confirm Password is Required')
    }
  )

  const handleSubmit = (values) => {
    if(values.password===values.confirmpassword){
        authapi.changepassword({email:values.email,password:values.password,token:token})
        .then((result)=>{
            setMessage('Password Update Successfull')
        }).catch((err)=>{
            setMessage('Something went Wrong')
        })
    }else{
        setMessage('Something went Wrong')
    }
  }

  const initialValues = {
    email:'',
    password:'',
    confirmpassword:''
  }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values,validate) }
        >
    {formik=>( 
       <div>
           <h1 className='my-4 font-weight-bold-display-4'>Set New Password</h1>
           <h4 style={{color: "red"}} > {message}</h4>
          <Form>
         <TextFild  label="Emial" name="email" type="email"/>
         <TextFild label="Password" name="password" type="password"/>
         <TextFild label="Confirm Password" name="confirmpassword" type="password"/>
         <button className='btn btn-dark mt-3' type='submit'>Sign In</button>
         <p><Link to="/">Back to Homepage</Link>.</p>
      
         </Form>
         
       </div>
    )} 
        </Formik>
      )
}

export default ResetPassword