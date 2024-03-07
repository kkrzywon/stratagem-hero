import React, { useState, useEffect } from 'react';
import stratagems from './stratagems.js';
import './scss/app.scss';

// Importing arrow images
import arrowUp from './arrow-pngs/white-arrow-up.png';
import arrowDown from './arrow-pngs/white-arrow-down.png';
import arrowLeft from './arrow-pngs/white-arrow-left.png';
import arrowRight from './arrow-pngs/white-arrow-right.png';
import arrowUpFilled from './arrow-pngs/red-arrow-up.png';
import arrowDownFilled from './arrow-pngs/red-arrow-down.png';
import arrowLeftFilled from './arrow-pngs/red-arrow-left.png';
import arrowRightFilled from './arrow-pngs/red-arrow-right.png';

import completionImage from './propaganda/make-it-rain-liberate-the-creek-by-me-v0-97qccznpenjc1.webp';

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [status, setStatus] = useState('Start the game!');
  const [currentStratagem, setCurrentStratagem] = useState({});
  const [shake, setShake] = useState(false);
  const [completedSequences, setCompletedSequences] = useState(0); // New state to track completed sequences

  const selectRandomStratagem = () => {
    const randomStratagem =
      stratagems[Math.floor(Math.random() * stratagems.length)];
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
        setShake(true);
        setTimeout(() => setShake(false), 500);
      } else {
        setUserSequence(updatedUserSequence);
        if (updatedUserSequence.length === sequence.length) {
          setCompletedSequences(completedSequences + 1); // Increment completed sequences
          setStatus('Congratulations! You completed the sequence.');
          setTimeout(selectRandomStratagem, 500);
        } else {
          setStatus('Good! Keep going.');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence, userSequence, completedSequences]);

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
    <div className="game-container">
      <h2>{status}</h2>
      {currentStratagem.name && (
        <div>
          <img
            src={currentStratagem.image}
            alt={currentStratagem.name}
            style={{ width: 75, height: 75 }}
          />
          <h3>{currentStratagem.name}</h3>
        </div>
      )}
      <p>Sequence to follow:</p>
      <div className="sequence">
        {sequence.map((arrow, index) => (
          <img
            key={index}
            src={getArrowImage(arrow, index)}
            alt={arrow}
            className={shake ? 'shake' : ''}
            style={{ width: 75, height: 75 }}
          />
        ))}
      </div>
      {completedSequences >= 6 && (
          <img
            src={completionImage}
            alt="Completion"
            style={{ width: '30%', height: 'auto' }}
          />
        )}
    </div>
  );
};

export default Game;
