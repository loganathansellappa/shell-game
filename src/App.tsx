import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { Game } from './components/Game';
import ScoreBoard from './components/ScoreBoard';
import './App.scss';

const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Game />} />
          <Route path="/score-board" element={<ScoreBoard />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default App;
