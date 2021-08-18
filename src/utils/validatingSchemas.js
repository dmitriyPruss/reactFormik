import * as yup from 'yup';

const EMAIL_SCHEMA = yup
  .string()
  .email('Invalid symbols. Try again...')
  .required('Email must not be empty!');

const PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{9,33}$/,
    'Wrong symbols!'
  )
  .min(10, 'Enter more then 9 symbols')
  .max(32, 'Too mush symbols!')
  .required('Password must not be empty!');

const USERNAME = yup.string().matches(/^([A-Z][a-z]{1,19})$/, 'Invalid name!');

export const LOGIN_SCHEMA = yup.object().shape({
  emailAddress: EMAIL_SCHEMA,
  userPassword: PASSWORD_SCHEMA,
});

export const CREATE_ACCOUNT_SCHEMA = yup.object().shape({
  firstName: USERNAME.required('First name must not be empty!'),
  lastName: USERNAME.required('Second name must not be empty!'),
  displayName: yup
    .string()
    .matches(/^\S+$/, 'No spaces!')
    .min(5, 'Enter more then 4 symbols')
    .required('DisplayName musn`t be empty!'),
  emailAddress: EMAIL_SCHEMA,
  userPassword: PASSWORD_SCHEMA,
  passwordConfirmation: yup
    .string()
    .required('Password musn`t be empty!')
    .oneOf([yup.ref('userPassword')], 'Password must be confirmed'),
});
