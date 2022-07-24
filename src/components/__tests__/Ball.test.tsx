import { Ball } from '../Ball';
import { renderWithRouter } from '../..//utils/tests';

test('renders Ball Component', () => {
  const { container } = renderWithRouter(<Ball />);
  expect(container.firstChild).toMatchSnapshot();
});
