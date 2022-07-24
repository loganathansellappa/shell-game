import reducer, { updateWinner, updateLoser, initialState } from '../GameLog';

describe('GameLog Slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('should handle updateWinner', () => {
    const previousState = initialState;
    expect(reducer(previousState, updateWinner())).toEqual({
      ...initialState,
      gameCount: 1,
      winners: 1,
    });
  });

  test('should handle updateLoser', () => {
    const previousState = initialState;
    expect(reducer(previousState, updateLoser())).toEqual({
      ...initialState,
      gameCount: 1,
      losers: 1,
    });
  });
});
