import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const newSequence = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']; // Example sequence
    setSequence(newSequence);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!sequence.length) return;

      const nextArrow = event.key;
      let updatedUserSequence = [...userSequence, nextArrow];

      if (nextArrow !== sequence[userSequence.length]) {
        setStatus('Incorrect! Try again.');
        setUserSequence([]);
      } else {
        if (updatedUserSequence.length === sequence.length) {
          setStatus('Congratulations! You completed the sequence.');
          setUserSequence([]);
        } else {
          setUserSequence(updatedUserSequence);
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
    switch (arrow) {
      case 'ArrowUp':
        return isCorrectSequence ? arrowUpFilled : arrowUp;
      case 'ArrowDown':
        return isCorrectSequence ? arrowDownFilled : arrowDown;
      case 'ArrowLeft':
        return isCorrectSequence ? arrowLeftFilled : arrowLeft;
      case 'ArrowRight':
        return isCorrectSequence ? arrowRightFilled : arrowRight;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>{status}</h2>
      <p>Sequence to follow:</p>
      <div>
        {sequence.map((arrow, index) => (
          <img key={index} src={getArrowImage(arrow, index)} alt={arrow.replace('Arrow', '')} style={{ width: 50, height: 50 }} />
        ))}
      </div>
    </div>
  );
};

export default Game;