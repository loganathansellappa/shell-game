import { configureStore } from '@reduxjs/toolkit';
import gameLogReducer from './states/GameLog';

export const store = configureStore({
  reducer: {
    gameLog: gameLogReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
