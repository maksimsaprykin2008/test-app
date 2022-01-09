import { useState } from 'react';

const Login = props => {

  const { form, handleChange, handleLoginClick } = props;
  const { username, password } = form;

  return (
    <div className="login-form">
      <div style={{fontSize: "40px"}}>Log In</div>
      <div style={{height: "40px"}}></div>
      <input name="username" value={username} type="text" placeholder="Username" onChange={handleChange} />
      <div style={{height: "20px"}}></div>
      <input name="password" value={password} type="password" placeholder="Password" onChange={handleChange} />
      <div style={{height: "60px"}}></div>
      <button type="submit" onClick={handleLoginClick}>Submit</button>
    </div>
  )
}

export default Login;