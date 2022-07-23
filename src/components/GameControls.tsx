import React, { forwardRef } from 'react';
import { Level } from '../utils/HelperUtils';
import './GameControls.scss';

interface GameControlsProps {
  startHandler: (hint?: boolean) => void;
  setGamerLevel: (shellId: number) => void;
  gamerLevel: Level;
  gameRunning: boolean;
}

export const GameControls = ({
  startHandler,
  setGamerLevel,
  gameRunning,
  gamerLevel,
}: GameControlsProps) => {
  console.log('gameRunning', gameRunning);
  console.log('gamerLevel', gamerLevel);
  return (
    <div className={'game-controls'}>
      <button
        disabled={gameRunning}
        className="control"
        onClick={() => startHandler()}
      >
        Start Game
      </button>
      <button
        disabled={gameRunning}
        className="control"
        onClick={() => startHandler(true)}
      >
        Start Game With Hint
      </button>
      <button
        disabled={gameRunning}
        className={`control ${
          gamerLevel === Level.Beginner ? 'control-selected' : ''
        }`}
        onClick={() => setGamerLevel(Level.Beginner)}
      >
        Beginner
      </button>
      <button
        disabled={gameRunning}
        className={`control ${
          gamerLevel === Level.Intermediate ? 'control-selected' : ''
        }`}
        onClick={() => setGamerLevel(Level.Intermediate)}
      >
        Intermediate
      </button>

      <button
        disabled={gameRunning}
        className={`control ${
          gamerLevel === Level.Expert ? 'control-selected' : ''
        }`}
        onClick={() => setGamerLevel(Level.Expert)}
      >
        Expert
      </button>
    </div>
  );
};
