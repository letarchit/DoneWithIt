import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import ErrorMessage from '../components/ErrorMessage'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen'
import AppButton from '../components/AppButton'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


function LoginScreen(props) {
   
    return (
        <Screen style={styles.container}>
           <Image 
           style={styles.logo}
           source={require("../assets/logo-red.png")}/> 
        
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={value => console.log(values)}
            validationSchema={validationSchema}
        >
        
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
        <>
            <AppTextInput 
            autoCapitalize='none'
             icon='email'
             placeholder='Email'
             onBlur={()=>setFieldTouched("email")}
             onChangeText={handleChange('email')}
             keyboardType="email-address"
             textContentType="emailAddress"
             />
             <ErrorMessage error={errors.email} visible={touched.email}/>
        
            <AppTextInput 
             autoCapitalize='none'
             autoCorrect={false}
             icon='lock'
             placeholder='Password'
             onBlur={() => setFieldTouched("password")}
             onChangeText={handleChange("password")}
             secureTextEntry
             textContentType='password'
             />
                <ErrorMessage error={errors.password} visible={touched.password}/>
             <AppButton 
             title='Login'
             onPress={handleSubmit}
             />
        </>
                )}
            </Formik>
        
        </Screen>
    );
}
const styles = StyleSheet.create({
   container: {
       padding: 10
   },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;