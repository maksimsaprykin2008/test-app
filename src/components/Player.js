import React from "react";
import tiger from './tiger.jpg';

const Player = props => {

  const { firstName, lastName, image } = props;

  const imageToDisplay = () => {
    switch(image) {
      case 'tiger':
      return tiger;
      default: 
      return null;
    }
  }
  
  return (
    <div className="player">
      <div className="player-image"><img src={tiger} /></div>
      <div style={{width: '10px'}}></div>
      {firstName}{' '}{lastName}
    </div>
  )
}

export default Player;