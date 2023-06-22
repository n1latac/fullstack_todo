import React from 'react'
import {Formik, Form, Field} from 'formik'
import { loginUser } from '../../api/userApi'

function SignIn(props) {
  const initialState = {
    email: '',
    password: ''
}

const submitHandler = (values, actions) => {
    props.getData({callback: loginUser, values})
}


return (
<div>
    <h2>SignUp</h2>
    <Formik
    initialValues={initialState}
    onSubmit={submitHandler}>
        {(formikProps)=>( 
            <Form>
                <Field name='email' placeholder='enter your email'/>
                <Field name='password' placeholder='enter your password'/>
                <button type='submit'>Send!</button>
            </Form>
            )}
    </Formik>
</div>
)
}

export default SignIn