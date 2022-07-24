import { Shell } from '../Shell';
import { renderWithRouter } from '../..//utils/tests';

test('renders Shell component', () => {
  const { container } = renderWithRouter(<Shell />);
  expect(container.firstChild).toMatchSnapshot();
});
