import React, { useState, useEffect } from 'react';

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [currentArrow, setCurrentArrow] = useState(null);
  const [status, setStatus] = useState('Start the game!');

  useEffect(() => {
    // Initialize the arrow sequence when the component mounts
    const newSequence = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']; // Example sequence
    setSequence(newSequence);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!sequence.length) return;

      const nextArrow = event.key;
      let updatedUserSequence = [...userSequence, nextArrow];

      if (nextArrow !== sequence[userSequence.length]) {
        // Incorrect key pressed
        setStatus('Incorrect! Try again.');
        setUserSequence([]);
      } else {
        // Correct key pressed
        setCurrentArrow(nextArrow.replace('Arrow', '').toUpperCase());
        if (updatedUserSequence.length === sequence.length) {
          // Completed the sequence
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

  return (
    <div>
      <h2>{status}</h2>
      <p>Sequence to follow: {sequence.map(arrow => arrow.replace('Arrow', '')).join(', ')}</p>
      {currentArrow && <p>You pressed: {currentArrow}</p>}
    </div>
  );
};

export default Game;
