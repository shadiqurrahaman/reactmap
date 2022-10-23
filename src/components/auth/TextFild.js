import React from 'react'
import { ErrorMessage, useField } from 'formik'


export const TextFild = ({...props}) => {
  const [field,meta] = useField(props)
  return (
    <div className='mb-4'>
      <label htmlFor={field.name}>{props.label}</label>
      <input 
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}` }
        {...field}{...props}
        autoCapitalize='off'
      />
        <ErrorMessage component='div' name={field.name} className="error"/>
    </div>
  )
}
