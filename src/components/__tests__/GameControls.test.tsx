import { GameControls } from '../GameControls';
import { renderWithRouter } from '../..//utils/tests';
import { Level } from '../../utils/HelperUtils';

test('renders GameControls Component', () => {
  const { container } = renderWithRouter(
    <GameControls
      startHandler={jest.fn()}
      setGamerLevel={jest.fn()}
      gamerLevel={Level.Beginner}
      gameRunning={false}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
