import React from 'react';
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import styles from './Login.module.css';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.textInput} component={Input}
                       name={'login'} placeholder={'login'}
                       validate={[required]}/>
            </div>
            <div>
                <Field className={styles.textInput} component={Input}
                       name={'password'} placeholder={'password'}
                       validate={[required]}/>
            </div>
            <div className={styles.checkbox} >
                <Field className={styles.checkbox} component={Input}
                       type="checkbox" name={'rememberMe'}/> <span>remember me</span>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

   const onSubmit = (formData) => {
       console.log(formData);
   }

    return <div className={styles.container}> 
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;
