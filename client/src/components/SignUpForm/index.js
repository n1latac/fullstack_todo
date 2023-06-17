import React from 'react'
import {Formik, Form, Field} from 'formik'
import {format} from 'date-fns'

function SignUp(props) {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: format(new Date(), 'yyyy-MM-dd')
    }

    const submitHandler = (values, actions) => {
        props.getData(values)
    }


  return (
    <div>
        <h2>SignUp</h2>
        <Formik
        initialValues={initialState}
        onSubmit={submitHandler}>
            {(formikProps)=>( 
                <Form>
                    <Field name='firstName' placeholder='enter your firstName'/>
                    <Field name='lastName' placeholder='enter your lastName'/>
                    <Field name='email' placeholder='enter your email'/>
                    <Field name='password' placeholder='enter your password'/>
                    <Field name='birthday' type='date'/>
                    <button type='submit'>Send!</button>
                </Form>
                )}
        </Formik>
    </div>
  )
}

export default SignUp