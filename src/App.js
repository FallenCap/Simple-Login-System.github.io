// import React, { useState } from 'react';
import './App.css';
import LoginCard from './Components/LoginForm/LoginCard';

const App = () => {
  // const [data, setData] = useState();

  // const addDataHandler = (signinData) => {
  //   setData((prevData) => {
  //     return [signinData, ...prevData];
  //   });
  // };

  return (
    <div>
      {/* <LoginCard takeData={addDataHandler} /> */}
      <LoginCard />
    </div>
  );
};

export default App;
