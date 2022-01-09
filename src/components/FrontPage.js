import Kolba from './Kolba';
import 'animate.css';
import { useState, useEffect } from 'react';

const FrontPage = () => {

  const [animated, setAnimated] = useState(false);

  const triggerTimeout = () => {
    setTimeout(() => setAnimated(true), 3000)
  }

  useEffect(() => {
    triggerTimeout();
  }, [])

  return (
  <div className="container">
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
  </div>
  )
}

export default FrontPage;