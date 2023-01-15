import React, { useState } from 'react';
import styles from '../Css/LoginForm.module.css';

const LoginForm = (props) => {
  const [isSigninShowing, setSigninShwoing] = useState(false);
  const [enteredName, setEnteredName] = useState('abc');
  const [enteredEmail, setEnteredEmail] = useState('xyz@gmail.com');
  const [enteredPassword, setEnteredPassword] = useState('Strong Password');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(event.target.value);
  };

  const dataSaveHandler = (event) => {
    setSigninShwoing(true);
    event.preventDefault();
    const newData = [
      {
        email: enteredEmail,
        password: enteredPassword,
      },
    ];
    props.onTakeData(newData);
  };

  if (isSigninShowing === false) {
    return (
      <div className={styles['Login-form']}>
        <h2>Signin</h2>
        <form onSubmit={dataSaveHandler}>
          <div className={styles['from-group-signin']}>
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={styles['from-group-signin']}>
            <label>Email</label>
            <input
              type="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={styles['from-group-signin']}>
            <label>Password</label>
            <input
              type="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={styles['from-group-signin']}>
            <button className={styles['form-button']}>Signin</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={styles['Login-form']}>
      <h2>Login</h2>
      <form onSubmit={dataSaveHandler}>
        <div className={styles['from-group-login']}>
          <label>Email</label>
          <input
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles['from-group-login']}>
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={styles['from-group-login']}>
          <button className={styles['form-button']}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
