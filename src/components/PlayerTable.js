import React from "react";
import Player from "./Player";
import { validPlayers } from "./Players"; 

const PlayerTable = () => {

  const renderPlayers = 
    validPlayers.map(player => {return <Player 
                                          firstName={player.firstName} 
                                          lastName={player.lastName} 
                                          image={player.image} 
                                        />})

  
  console.log(validPlayers)

  return (
    <div>
      {renderPlayers}
    </div>
  )
}

export default PlayerTable;