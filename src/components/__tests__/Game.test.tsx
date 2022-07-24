import { renderWithRouter, testStore } from '../..//utils/tests';
import { Provider } from 'react-redux';
import { Game } from '../Game';

describe('Game', () => {
  let element: { container: HTMLElement };
  beforeEach(() => {
    process.env = { SHELL_COUNT: '3' };
    element = renderWithRouter(
      <Provider store={testStore()}>
        <Game />
      </Provider>
    );
  });

  test('renders Game component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
  });
});
