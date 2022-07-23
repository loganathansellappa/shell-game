import React, { createRef, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWinner, updateLoser, GameLogState } from '../states/GameLog';
import { Link } from 'react-router-dom';
import { shellCount, shuffle, getColors, Level } from '../utils/HelperUtils';
import './Game.scss';
import { Shell } from './Shell';
import GameResult from './GameResult';
import Shuffle from './Shuffle';
import { GameControls } from './GameControls';

export const Game = () => {
  const dispatch = useDispatch();
  const shellItems: Array<string> = Array(shellCount())
    .fill(0)
    .map((e, i) => `key${i}`);
  let [winnerShell, setWinnerShell] = useState<string | boolean>(false);
  let [shells, setShells] = useState<Array<string>>(shellItems);
  let [animations, setAnimations] = useState<Array<string>>([]);
  let [userShell, setUserShell] = useState<string | boolean>(false);
  let [showBall, setShowBall] = useState<boolean>(false);
  let [level, setLevel] = useState<Level>(Level.Beginner);

  const resetGame = useCallback(() => {
    setUserShell(false);
    setWinnerShell(false);
    setAnimations([]);
  }, []);
  //
  //
  // const changeLevel = (l: Level) => {
  //     setLevel(l);
  //     resetGame();
  // }

  const toggleHint = (hint: boolean) => {
    let colors = hint ? getColors(shellCount()) : [];
    setAnimations(colors);
  };

  const reorder = (showHint: boolean = false) => {
    setWinnerShell(shuffle(shellItems)[0]);
    toggleHint(showHint);
    setShowBall(true);
    setTimeout(() => {
      for (let i = 0; i <= level; i++) {
        setTimeout(() => {
          const shuffledShells = shuffle(shellItems);
          setShells([...shuffledShells]);
          setShowBall(false);
        }, i * 300);
      }
    }, 1000);
  };

  useEffect(() => {
    if (userShell) {
      console.log('userShell---winner', winnerShell);
      console.log('userShell----userShell', userShell);
      if (userShell === winnerShell) {
        dispatch(updateWinner());
      } else {
        dispatch(updateLoser());
      }
    }
  }, [userShell]);

  useEffect(() => {
    if (winnerShell) {
      resetGame();
    }
  }, [level]);

  const result = useCallback(() => {
    if (userShell === false) return null;
    return (
      <div className="hide-result">
        <GameResult winner={userShell === winnerShell} reset={resetGame} />
      </div>
    );
  }, [userShell]);

  return (
    <div className={'game-container'}>
      <div>
        <Link className={'score-board'} to={'/score-board'}>
          <h3>View Score Board</h3>
        </Link>
      </div>
      <div>
        {result()}
        <div className="shell-container">
          <Shuffle>
            {shells.map((e, i) => (
              <Shell
                key={e}
                color={animations[e]}
                isSelected={userShell === i}
                ballPlaced={e === winnerShell && showBall}
                shellId={e}
                ref={createRef()}
                onClickHandler={setUserShell}
              />
            ))}
          </Shuffle>
        </div>
        <GameControls
          startHandler={reorder}
          setGamerLevel={setLevel}
          gamerLevel={level}
          gameRunning={winnerShell}
        />
      </div>
    </div>
  );
};
