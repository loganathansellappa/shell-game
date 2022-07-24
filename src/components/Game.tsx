import React, { createRef, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWinner, updateLoser } from '../states/GameLog';
import { Link } from 'react-router-dom';
import { shellCount, shuffle, getColors, Level } from '../utils/HelperUtils';
import './Game.scss';
import { Shell } from './Shell';
import GameResult from './GameResult';
import Shuffle from './Shuffle';
import { GameControls } from './GameControls';
import { ColorCodes } from '../@types/GenericTypes';

export const Game = () => {
  const dispatch = useDispatch();
  const shellItems: Array<string> = Array(shellCount())
    .fill(0)
    .map((e, i) => `key${i}`);
  const animationDelay = 500;
  let [winnerShell, setWinnerShell] = useState<string | boolean>(false);
  let [shells, setShells] = useState<Array<string>>(shellItems);
  let [hintColors, setHintColors] = useState<ColorCodes>({});
  let [userShell, setUserShell] = useState<string | boolean>(false);
  let [showBall, setShowBall] = useState<boolean>(false);
  let [level, setLevel] = useState<Level>(Level.Beginner);
  let animationWaitTimeOut: null | ReturnType<typeof setTimeout> = null;
  let animationTimeOut: Array<null | ReturnType<typeof setTimeout>> = [];

  useEffect(() => {
    return () => resetGame();
  }, []);

  const resetGame = useCallback(() => {
    setUserShell(false);
    setWinnerShell(false);
    setHintColors({});
    animationWaitTimeOut && clearTimeout(animationWaitTimeOut);
    animationTimeOut.forEach((t) => t && clearTimeout(t));
  }, []);

  const toggleHint = useCallback(
    (hint: boolean) => {
      let colors = hint ? getColors(shellCount()) : {};
      setHintColors(colors);
    },
    [hintColors]
  );

  const reorder = (showHint: boolean = false) => {
    setWinnerShell(shuffle(shellItems)[0]);
    toggleHint(showHint);
    setShowBall(true);
    animationWaitTimeOut = setTimeout(() => {
      for (let i = 1; i <= level; i++) {
        animationTimeOut.push(
          setTimeout(() => {
            console.log('running', i, i * animationDelay);
            const shuffledShells = shuffle(shellItems);
            setShells([...shuffledShells]);
            setShowBall(false);
          }, i * animationDelay)
        );
      }
    }, 1500);
  };

  useEffect(() => {
    if (userShell) {
      if (userShell === winnerShell) {
        dispatch(updateWinner());
      } else {
        dispatch(updateLoser());
      }
    }
  }, [userShell]);

  useEffect(() => {
    resetGame();
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
                color={hintColors[e] as string}
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
          gameRunning={!!winnerShell}
        />
      </div>
    </div>
  );
};
