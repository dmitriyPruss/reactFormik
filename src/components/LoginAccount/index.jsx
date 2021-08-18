import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from './../Input';
import { LOGIN_SCHEMA } from '../../utils/validatingSchemas';
import classNames from 'classnames';
import styles from './LoginAccount.module.scss';

function LoginAccount () {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.header}>LOGIN TO YOUR ACCOUNT</h1>
      <Formik
        initialValues={{
          emailAddress: '',
          userPassword: '',
          rememberCheck: false,
        }}
        validationSchema={LOGIN_SCHEMA}
        onSubmit={(values, formikBag) => {
          // console.log('values :>> ', values);
          // console.log('formikBag :>> ', formikBag);
          formikBag.resetForm();
        }}
      >
        {formikProps => {
          // console.log('formikProps :>> ', formikProps.values.rememberCheck);

          const submitButton = classNames(styles.buttonView, styles.submitBut);
          const inputClass = classNames(
            styles.inputElemLogin,
            styles.inputLogin
          );

          return (
            <Form className={styles.formContainer}>
              <div className={styles.inputsContainer}>
                <Input
                  type='text'
                  name='emailAddress'
                  placeholder='Email address'
                  className={inputClass}
                />
                <Input
                  type='password'
                  name='userPassword'
                  placeholder='Password'
                  className={inputClass}
                />
              </div>
              <div className={styles.rememberingPassword}>
                <label>
                  <Field type='checkbox' name='rememberCheck' /> Remember Me
                </label>
                <a href='https://www.squadhelp.com/forgot_password.php'>
                  Forgot Password
                </a>
              </div>
              <div className={styles.buttons}>
                <input className={submitButton} type='submit' value='LOGIN' />
                <a
                  className={styles.signUpGoogle}
                  href='https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiKou78qqzyAhX7_rsIHZieDLEQPAgI'
                >
                  Sign up with Google
                </a>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginAccount;
