import GameResult from '../GameResult';
import { renderWithRouter } from '../..//utils/tests';

test('renders GameResult Component', () => {
  const { container } = renderWithRouter(
    <GameResult winner={false} reset={jest.fn()} />
  );
  expect(container.firstChild).toMatchSnapshot();
  expect(container.textContent).toContain("You've lose! Try again");
});
