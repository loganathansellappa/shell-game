import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
export const testStore = () => {
  const mockStore = configureStore();
  const initialState = {
    gameLog: {
      gameCount: 1,
      winners: 1,
      losers: 0,
    },
  };
  const store = mockStore(initialState);
  return store;
};
