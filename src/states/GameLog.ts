import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameLogState {
  gameCount: number;
  winners: number;
  losers: number;
}

const initialState: GameLogState = {
  gameCount: 0,
  winners: 0,
  losers: 0,
};

export const gameLogSlice = createSlice({
  name: 'gameLog',
  initialState,
  reducers: {
    updateWinner: (state: Partial<GameLogState>) => {
      state.gameCount += 1;
      state.winners += 1;
    },
    updateLoser: (state: Partial<GameLogState>) => {
      state.gameCount += 1;
      state.losers += 1;
    },
  },
});

export const { updateWinner, updateLoser } = gameLogSlice.actions;

export default gameLogSlice.reducer;
