import React, { useState } from 'react';
import './App.css';
import LoginCard from './Components/LoginForm/LoginCard';

const App = () => {
  const [data, setData] = useState();

  // const addDataHandler = (signinData) => {
  //   setData((prevData) => {
  //     return [signinData, ...prevData];
  //   });
  // };
  const addDataHandler = (signinData) => {
    setData(signinData);
  };
  return (
    <div>
      <LoginCard onTakeLoginData={addDataHandler} passSaveData={data} />
      {/* <LoginCard setData={setData} data={data} /> */}
    </div>
  );
};

export default App;
