import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { Formik,Form} from 'formik';
import store, { storeToken } from '../../store';
import { TextFild } from './TextFild';
import * as yup from 'yup';
import authapi from '../../api/authapi';

export const Forgetpassword = () => {
const [message, setMessage] = useState([]);

  let validate =yup.object(
    {
      email: yup.string().email('Emial is invalide').required('Emial is Required')
     
    }
  )

  const handleSubmit = (values) => {
    authapi.forgetpassword({email:values.email})
    .then((result)=>{
        setMessage(["Message Send"])
    }).catch(err => {
        console.log(err);
        let rerr = JSON.parse(err.request.responseText)
        let errormessage = []
        errormessage.push(rerr.message)
        errormessage.push(rerr.errors.email)
        setMessage(errormessage)
       
    });

        
  }

  const initialValues = {
    email:''

  }


    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values,validate) }
        >
    {formik=>( 
       <div>
           <h1 className='my-4 font-weight-bold-display-4'>Reset your password</h1>
            {message.map((data)=>
       <h4 style={{color:'red'}}>{data}</h4>
        )}
          <Form>
         <TextFild  label="Emial" name="email" type="email"/>
         <button className='btn btn-dark mt-3' type='submit'>Submit</button>
          <p><Link to="/">Back to Homepage</Link>.</p>
         </Form>
         
       </div>
    )} 
        </Formik>
      )
}

export default Forgetpassword