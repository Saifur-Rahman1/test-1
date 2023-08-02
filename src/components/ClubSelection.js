import React from 'react';

const ClubSelection = ({ selectedPlayers, totalBudget }) => {
  return (
    <div className="club-selection">
      <h2>Selected Players for Club</h2>
      <p>Total Budget: ${totalBudget}</p>
      <ul>
        {selectedPlayers.map((player) => (
          <li key={player.id}>
            {player.name} - ${player.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubSelection;
