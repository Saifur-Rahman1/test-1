import React from 'react';

const PlayerCard = ({ player, onSelect }) => {
  const { id, name, salary } = player;

  return (
    <div className="player-card">
      <img
        src={player.image}
        alt={player.name}
        style={{ width: "300px", height: "auto", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <p>Salary: ${salary}</p>
      <button onClick={() => onSelect(player)}>Select for Team</button>
    </div>
  );
};

export default PlayerCard;
