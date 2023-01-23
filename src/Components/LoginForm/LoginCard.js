import React, { useState } from 'react';
import styles from '../Css/LoginCard.module.css';
import LoginForm from './LoginForm';
import WelcomeText from './WelcomeText';

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
    props.passSaveData.map((signin) => (
      <div className={styles.card}>
        <WelcomeText name={signin.name} />
      </div>
    ))
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
