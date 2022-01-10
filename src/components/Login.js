import React, { useState, useEffect } from 'react';
import { validUsers } from './Users';

const Login = props => {

  const { form, handleChange, handleLoginClick } = props;
  const { username, password } = form;
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleLocalClick = () => {
    validateUser(form);
  }

  const validateUser = data => {
    validUsers.map(user => {
      if(data.username === user.username && data.password === user.password) {
        setDisplayAlert(true);
      }
    })
  }

  console.log("ALERT: ", form, displayAlert)

  return (
    <div className="login-form">
      <div style={{fontSize: "40px"}}>Log In</div>
      <div style={{height: "40px"}}></div>
      <input 
        name="username" 
        value={username} 
        type="text" 
        placeholder="Username" 
        onChange={handleChange} 
      />
      <div style={{height: "20px"}}></div>
      <input 
        name="password" 
        value={password} 
        type="password" 
        placeholder="Password" 
        onChange={handleChange} 
      />
      <div style={{height: "60px"}}></div>
      <button type="submit" onClick={() => {handleLoginClick(); handleLocalClick()}}>Submit</button>
      {displayAlert && <div className="alert">Wrong credentials, please try again!</div>}
    </div>
  )
}

export default Login;