import React, { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Formik,Form} from 'formik';
import store, { storeToken } from '../../store';
import { TextFild } from './TextFild';
import * as yup from 'yup';
import authapi from '../../api/authapi';


export const Register = () => {
const [error,setError] = useState([]);

  const navigate = useNavigate();
  let validate =yup.object(
    {
      name:yup.string().max(60,'Name can max 60 char')
      .min(6,'name must be at least 6 char').required('Emial is Required')
      .matches(/^[aA-zZ1-9\s]+$/, "Only alphabets are allowed for this field "),
      email: yup.string().email('Emial is invalide').required('Emial is Required'),
      password: yup.string().min(6,'Password is at least 6 charecter').required('Password is Required')
    }
  )

  const handleSubmit = (values) => {
    const data = authapi.register({name:values.name,email:values.email,password:values.password})
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

  const initialValues = {
    name:'',
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
           <h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
           {error.map((data)=>
      <h4 style={{color: "red"}} > {data}</h4>
        )}
          <Form>
        <TextFild  label="Name" name="name" type="text"/>
         <TextFild  label="Emial" name="email" type="email"/>
         <TextFild label="Password" name="password" type="password"/>
         <button className='btn btn-dark mt-3' type='submit'>Submit</button>
          <p><Link to="/">Back to Homepage</Link>.</p>
         </Form>
         
       </div>
    )} 
        </Formik>
      )
}

export default Register