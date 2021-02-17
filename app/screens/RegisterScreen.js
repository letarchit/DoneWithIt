import React from 'react';
import * as Yup from 'yup'

import Screen from '../components/Screen'
import {AppForm, AppFormField, SubmitButton} from '../components/forms/index'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function RegisterScreen(props) {
    return (
        <Screen>
        <AppForm
        initialValues={{name:'', email: '', password: ''}}
        onSubmit={(value) =>console.log(value)}
        validationSchema = {validationSchema}
        >
             <AppFormField 
            autoCapitalize='none'
             icon='account'
             placeholder='Name'
             name='user'
             keyboardType="email-address"
            
             />
             <AppFormField 
            autoCapitalize='none'
             icon='email'
             placeholder='Email'
             name='email'
             keyboardType="email-address"
             textContentType="emailAddress"
             />
        
            <AppFormField 
             autoCapitalize='none'
             autoCorrect={false}
             icon='lock'
             name='password'
             placeholder='Password'
             secureTextEntry
             textContentType='password'
             />
             <SubmitButton title="Register"/>
        </AppForm>
        </Screen>
    );
}

export default RegisterScreen;