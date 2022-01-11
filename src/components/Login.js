import React, { useState, useEffect } from 'react';
import { validUsers } from './Users';

const Login = props => {

  const { form, handleChange, handleLoginClick } = props;
  const { username, password } = form;
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleLocalClick = e => {
    e.preventDefault();
    validateUser(form);
  }

  const handleLocalChange = () => {
    setDisplayAlert(false);
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log('PRESSED')
      handleLoginClick(e); 
      handleLocalClick(e);
    }
  }

  const validateUser = data => {
    validUsers.map(user => {
      if(data.username !== user.username || data.password !== user.password) {
        setDisplayAlert(true);
      }
    })
  }

  return (
    <div className="login-form" onKeyPress={handleKeyPress} tabIndex='0'>
      <div style={{fontSize: "40px"}}>Log In</div>
      <div style={{height: "40px"}}></div>
      <form 
        onSubmit={e => {handleLoginClick(e); handleLocalClick(e)}} 
        onKeyPress={handleKeyPress} tabIndex='0'
      >
        <input 
          name="username" 
          value={username} 
          type="text" 
          placeholder="Username" 
          onChange={e => {handleChange(e); handleLocalChange(e)}}
        />
        <div style={{height: "20px"}}></div>
        <input 
          name="password" 
          value={password} 
          type="password" 
          placeholder="Password" 
          onChange={e => {handleChange(e); handleLocalChange(e)}} 
        />
        <div style={{height: "60px"}}></div>
        <input 
          className='button'
          type="submit" 
          value='Submit'
        />
      </form>
      {displayAlert && <div className="alert">Wrong credentials, please try again!</div>}
    </div>
  )
}

export default Login;