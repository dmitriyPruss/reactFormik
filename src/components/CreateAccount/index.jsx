import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from './../Input';
import { CREATE_ACCOUNT_SCHEMA } from './../../utils/validatingSchemas';
import classNames from 'classnames';
import styles from './CreateAccount.module.scss';

export default function CreateAccount () {
  const initValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    emailAddress: '',
    userPassword: '',
    passwordConfirmation: '',
    allowSquadhelp: false,
    joinAs: '',
  };

  return (
    <>
      <div className={styles.accountContainer}>
        <h1 className={styles.header}>CREATE AN ACCOUNT</h1>
        <p className={styles.paragraph}>
          We always keep your name and email address private.
        </p>
        <Formik
          initialValues={initValues}
          validationSchema={CREATE_ACCOUNT_SCHEMA}
          onSubmit={(values, formikBag) => {
            // console.log('values :>> ', values);
            formikBag.resetForm();
          }}
        >
          {formikProps => {
            // console.log('formikProps :>> ', formikProps.values.allowSquadhelp);
            // console.log('formikProps :>> ', formikProps.values.joinAs);

            const joinButton = classNames(styles.buttonView, styles.buttonJoin);
            const submitButton = classNames(
              styles.buttonView,
              styles.submitBut
            );
            const inputClass = classNames(styles.inputElemAcc, styles.inputAcc);

            return (
              <>
                <Form className={styles.formContainer}>
                  <div className={styles.inputsContainer}>
                    <div className={styles.inputsBlock}>
                      <Input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        className={inputClass}
                      />
                      <Input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        className={inputClass}
                      />
                    </div>
                    <div className={styles.inputsBlock}>
                      <Input
                        type='text'
                        name='displayName'
                        placeholder='Display Name'
                        className={inputClass}
                      />
                      <Input
                        type='text'
                        name='emailAddress'
                        placeholder='Email Address'
                        className={inputClass}
                      />
                    </div>
                    <div className={styles.inputsBlock}>
                      <Input
                        type='password'
                        name='userPassword'
                        placeholder='Password'
                        className={inputClass}
                      />
                      <Input
                        type='password'
                        name='passwordConfirmation'
                        placeholder='Password Confirmation'
                        className={inputClass}
                      />
                    </div>
                    <div className={joinButton}>
                      <label>
                        <Field
                          type='radio'
                          name='joinAs'
                          value='Join As a Buyer'
                        />
                        <p>Join As a Buyer </p>
                        <span>
                          I am looking for a Name, Logo or Tagline for my
                          business, brand or product.
                        </span>
                      </label>
                    </div>
                    <div className={joinButton}>
                      <label>
                        <Field
                          type='radio'
                          name='joinAs'
                          value='join As a Creative'
                        />
                        <p>Join As a Creative or Marketplace Seller </p>
                        <span>
                          I plan to submit name ideas, Logo designs or sell
                          names in Domain Marketplace.
                        </span>
                      </label>
                    </div>
                    <label className={styles.allowSquadCheck}>
                      <Field type='checkbox' name='allowSquadhelp' /> Allow
                      Squadhelp to send marketing/promotional offers from time
                      to time
                    </label>
                    <br />
                    <input
                      className={submitButton}
                      type='submit'
                      value='Create Account'
                    />
                    <p style={{ fontWeight: 'bold', margin: '10px 0' }}>
                      By clicking this button, you agree to our{' '}
                      <a
                        href='https://www.squadhelp.com/Terms&Conditions'
                        target='blank'
                        style={{ color: 'white' }}
                      >
                        Terms of Service
                      </a>
                    </p>
                    <a
                      className={styles.signUpGoogle}
                      href='https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwiKou78qqzyAhX7_rsIHZieDLEQPAgI'
                    >
                      Sign up with Google
                    </a>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
