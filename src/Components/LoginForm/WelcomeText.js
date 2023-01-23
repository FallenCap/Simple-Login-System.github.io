import React from 'react';
import styles from '../Css/WelcomeText.module.css';

const WelcomeText = (props) => {
  return <h2 className={styles.heading}>Welcome {props.name}</h2>;
};
export default WelcomeText;
