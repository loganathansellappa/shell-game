import './ScoreBoard.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ScoreBoard {
  winner: boolean;
  reset: () => void;
}

const ScoreBoard = () => {
  const navigate = useNavigate();
  const totalWinners = useSelector((state: RootState) => state.gameLog.winners);
  const totalGamesPlayed = useSelector(
    (state: RootState) => state.gameLog.gameCount
  );
  const totalLosers = useSelector((state: RootState) => state.gameLog.losers);

  return (
    <div className={'score-board'}>
      <div className="item">
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
      <div className="item">Total Games Played {totalGamesPlayed}</div>
      <div className="item">Win Count {totalWinners}</div>
      <div className="item">Lost Count {totalLosers}</div>
    </div>
  );
};

export default ScoreBoard;
