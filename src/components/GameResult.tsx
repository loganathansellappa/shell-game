import './GameResult.scss';

interface GameResultProps {
  winner: boolean;
  reset: () => void;
}

const GameResult = ({ winner, reset }: GameResultProps) => {
  let text = "You've Won";
  if (!winner) {
    text = "You've lose! Try again";
  }
  return (
    <div className={'result-container'}>
      <p className={winner ? 'winner' : 'loser'}>{text}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default GameResult;
