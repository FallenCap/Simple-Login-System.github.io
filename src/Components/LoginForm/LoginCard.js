import React, { useState } from 'react';
import styles from '../Css/LoginCard.module.css';
import LoginForm from './LoginForm';

const LoginCard = (props) => {
  const [passedLoginData, setPassedLogInData] = useState();

  const passedSigninDataHandler = (passData) => {
    props.onTakeLoginData(passData);
  };

  const signinData = props.passSaveData;
  console.log(signinData);

  const passedLoginDataHandler = (loginData) => {
    setPassedLogInData(loginData);
  };

  return passedLoginData &&
    passedLoginData.email === signinData.email &&
    passedLoginData.password === signinData.password ? (
    <div className={styles.card}>
      <h2 className={styles.heading}>Welcome {signinData.name}</h2>
    </div>
  ) : (
    <div className={styles.card}>
      <LoginForm
        onTakeSigninData={passedSigninDataHandler}
        onTakeLoginData={passedLoginDataHandler}
      />
    </div>
  );
};

export default LoginCard;
