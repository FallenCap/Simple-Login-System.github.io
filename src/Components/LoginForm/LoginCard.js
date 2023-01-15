import React from 'react';
import styles from '../Css/LoginCard.module.css';
import LoginForm from './LoginForm';

const LoginCard = (props) => {
  const passedDataHandler = (passData) => {
    props.takeData(passData);
  };

  return (
    <div className={styles['card']}>
      <LoginForm onTakeData={passedDataHandler} />
    </div>
  );
};

export default LoginCard;
