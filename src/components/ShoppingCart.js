import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import ClubSelection from './ClubSelection';

const players = [
    {
        id: 1,
        name: 'Giyu Tomioka',
        image: './images/Giyuu.png',
        salary: 500,
        club: null,
    },

    {
        id: 2,
        name: 'Mitsuri Kanroji',
        image: './images/Mitsuri.png',
        salary: 300,
        club: null,
    }, 

    {  
        id: 3,
        name: 'Obanai Iguro',
        image: './images/Obanai.png',
        salary: 400,
        club: null,
    },

    {
        id: 4,
        name: 'Sanemi Shinazugawa',
        image: './images/Sanemi.png',
        salary: 600,
        club: null,
    },

    {
        id: 5,
        name: 'Gyomei Himejima',
        image: './images/Gyomei.png',
        salary: 700,
        club: null,
    },


    {
        id: 6,
        name: 'Muichiro Tokito',
        image: './images/Muichiro.png',
        salary: 900,
        club: null,
    },


    {
        id: 7,
        name: 'Shinobu Kocho',
        image: './images/Shinobu.png',
        salary: 200,
        club: null,
    },


    {  
        id: 8,
        name: 'Kyojuro Rengoku',
        image: './images/Kyojuro.png',
        salary: 1000,
        club: null,
    },


    {
        id: 9,
        name: 'Zenitsu Agatsuma',
        image: './images/Zenitsu.png',
        salary: 100,
        club: null,
    },

    {
        id: 10,
        name: 'Tengen Uzui',
        image: './images/Tengen.png',
        salary: 800,
        club: null,
    },

  ];











const ShoppingCart = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    // Calculate total budget and update state
    const budget = selectedPlayers.reduce((acc, player) => acc + player.salary, 0);
    setTotalBudget(budget);
  }, [selectedPlayers]);

  const handlePlayerSelect = (player) => {
    // Check if the player is already selected
    if (!selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <div className="shopping-cart">
      <div className="player-list">
        <h2>Player List</h2>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} onSelect={handlePlayerSelect} />
        ))}
      </div>
      <ClubSelection selectedPlayers={selectedPlayers} totalBudget={totalBudget} />
    </div>
  );
};

export default ShoppingCart;
