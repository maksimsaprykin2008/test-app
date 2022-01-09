import Kolba from './Kolba';
import Login from './Login';
import 'animate.css';
import { useState, useEffect } from 'react';

const FrontPage = () => {

  const [animated, setAnimated] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);

  const emptyForm = { username: '', password: ''};

  const [form, setForm] = useState(emptyForm);

  const triggerTimeout = () => {
    setTimeout(() => setAnimated(true), 3000)
  }

  const triggerLoginTimeout = () => {
    setTimeout(() => setDisplayLogin(true), 4000)
  }

  useEffect(() => {
    triggerTimeout();
    triggerLoginTimeout();
  }, [])

  const handleLoginClick = () => {
    setForm(emptyForm);
    console.log('LOGIN CLICKED: ', form)
  }

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  return (
  <div className="container">
    {displayLogin ? <div className="animate__animated animate__fadeInUp">
      <Login handleLoginClick={handleLoginClick} handleChange={handleChange} form={form} />
      </div> : <div>
    <div className={animated ? "subcontainer animate__animated animate__backOutUp" : "subcontainer"}>
      <div className="cork"></div>
      <h1 className="header">
        Chem
      </h1>
      <Kolba />
      <h1 className="header">
        stry
      </h1>
    </div>
    <div className={animated ? "subtext animate__animated animate__backOutUp" : "subtext"}>Химия</div>
    </div>}
    
  </div>
  )
}

export default FrontPage;