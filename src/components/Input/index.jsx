import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import styles from './../CreateAccount/CreateAccount.module.scss';

const Input = props => {
  const { name, ...rest } = props;
  const [spanClassName, inputClass] = rest.className.split(' ');

  return (
    <span className={spanClassName}>
      <Field name={name} placeholder='First Name'>
        {({ field, form, meta }) => {
          const inputClassName = classNames(inputClass, {
            [styles.valid]: !meta.error && meta.touched,
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} className={inputClassName} />;
        }}
      </Field>

      <ErrorMessage name={name} component='p' className={styles.errorInfo} />
    </span>
  );
};

export default Input;
