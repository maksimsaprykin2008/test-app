import React from 'react';
import PlayerTable from './PlayerTable';  
import trophy from './trophy.png';

const LeaderBoard = () => {
  return (
    <div className="leaderboard">
      <div className='leaderboard-header'>
        <h1>Leaderboard&nbsp;&nbsp;</h1>
        <div className="image-container"><img src={trophy} /></div>
      </div>
      <div className='player-table'><PlayerTable /></div>
      
    </div>
  )
}

export default LeaderBoard;