import { renderWithRouter } from '../..//utils/tests';
import Shuffle from '../Shuffle';
import { createRef } from 'react';

test('renders Shuffle component', () => {
  const { container } = renderWithRouter(
    <Shuffle>
      <div ref={createRef()}>test</div>
    </Shuffle>
  );
  expect(container.firstChild).toMatchSnapshot();
});
