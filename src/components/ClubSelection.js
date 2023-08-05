import React from 'react';

const ClubSelection = ({ selectedPlayers, totalBudget }) => {
  return (
    <div className="club-selection">
      <h2>Selected Hashira For Team</h2>
      <p>Total Budget: ${totalBudget}</p>
      <ul>
        {selectedPlayers.map((player) => (
          <li key={player.id}>
            {player.name} - ${player.salary}
          </li>
        ))}
      </ul>
      <footer>
      Copyright © 2023 Saifur Rahman®. All rights reserved.
      </footer>
    </div>
  );
};

export default ClubSelection;
