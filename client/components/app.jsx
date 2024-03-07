import React, { useState, useEffect } from 'react';
import stratagems from './stratagems.js'; // Adjust the import path as necessary

// Importing arrow images
import arrowUp from './arrow-pngs/white-arrow-up.png';
import arrowDown from './arrow-pngs/white-arrow-down.png';
import arrowLeft from './arrow-pngs/white-arrow-left.png';
import arrowRight from './arrow-pngs/white-arrow-right.png';
import arrowUpFilled from './arrow-pngs/red-arrow-up.png';
import arrowDownFilled from './arrow-pngs/red-arrow-down.png';
import arrowLeftFilled from './arrow-pngs/red-arrow-left.png';
import arrowRightFilled from './arrow-pngs/red-arrow-right.png';

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [status, setStatus] = useState('Start the game!');
  const [currentStratagem, setCurrentStratagem] = useState({});

  const selectRandomStratagem = () => {
    const randomStratagem = stratagems[Math.floor(Math.random() * stratagems.length)];
    setCurrentStratagem(randomStratagem);
    setSequence(randomStratagem.sequence);
    setUserSequence([]);
    setStatus('New stratagem! Follow the sequence.');
  };

  useEffect(() => {
    selectRandomStratagem();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!sequence.length) return;

      const keyMap = {
        ArrowUp: 'Up',
        ArrowDown: 'Down',
        ArrowLeft: 'Left',
        ArrowRight: 'Right',
      };

      const nextArrow = keyMap[event.key] || '';
      let updatedUserSequence = [...userSequence, nextArrow];

      if (!nextArrow || nextArrow !== sequence[userSequence.length]) {
        setStatus('Incorrect! Try again.');
        setUserSequence([]);
      } else {
        setUserSequence(updatedUserSequence);
        if (updatedUserSequence.length === sequence.length) {
          setStatus('Congratulations! You completed the sequence.');
          setTimeout(selectRandomStratagem, 500); // Reduced delay to 0.5 seconds
        } else {
          setStatus('Good! Keep going.');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sequence, userSequence]);

  const getArrowImage = (arrow, index) => {
    const isCorrectSequence = index < userSequence.length;
    const arrowMap = {
      Up: isCorrectSequence ? arrowUpFilled : arrowUp,
      Down: isCorrectSequence ? arrowDownFilled : arrowDown,
      Left: isCorrectSequence ? arrowLeftFilled : arrowLeft,
      Right: isCorrectSequence ? arrowRightFilled : arrowRight,
    };

    return arrowMap[arrow] || null;
  };

  return (
    <div>
      <h2>{status}</h2>
      {currentStratagem.name && (
        <div>
          <img src={currentStratagem.image} alt={currentStratagem.name} style={{ width: 50, height: 50 }} />
          <h3>{currentStratagem.name}</h3>
        </div>
      )}
      <p>Sequence to follow:</p>
      <div>
        {sequence.map((arrow, index) => (
          <img key={index} src={getArrowImage(arrow, index)} alt={arrow} style={{ width: 50, height: 50 }} />
        ))}
      </div>
    </div>
  );
};

export default Game;
