import React from "react";
import tiger from './tiger.jpg';
import giraffe from './giraffe.jpg';
import leopard from './leopard.jpg';
import heron from './heron.jpg';
import racoon from './racoon.jpg';

const Player = props => {

  const { firstName, lastName, image } = props;

  const imageToDisplay = () => {
    switch(image) {
      case 'tiger':
        return tiger;
      case 'giraffe':
        return giraffe;
      case 'leopard':
        return leopard;
      case 'heron':
        return heron;
      case 'racoon':
        return racoon;
      default: 
        return null;
    }
  }
  
  return (
    <div className="player">
      <div className="player-image"><img src={imageToDisplay()} /></div>
      <div style={{width: '10px'}}></div>
      {firstName}{' '}{lastName}
    </div>
  )
}

export default Player;