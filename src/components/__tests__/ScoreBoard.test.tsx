import { renderWithRouter, testStore } from '../..//utils/tests';
import { Provider } from 'react-redux';
import ScoreBoard from '../ScoreBoard';

describe('ScoreBoard', () => {
  let element: { container: HTMLElement };
  beforeEach(() => {
    process.env = { SHELL_COUNT: '3' };
    element = renderWithRouter(
      <Provider store={testStore()}>
        <ScoreBoard />
      </Provider>
    );
  });

  test('renders ScoreBoard Page', () => {
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain('Total Games Played 1');
  });
});
