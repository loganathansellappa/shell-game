import { getColors, shellCount, shuffle } from '../HelperUtils';

describe('Helpers', () => {
  const OLD_ENV = process.env;
  const env = {
    SHELL_COUNT: '1',
  };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, ...env };
  });

  it('#shellCount should return shellCount', () => {
    expect(shellCount()).toEqual(Number(env.SHELL_COUNT));
  });

  it('#shuffle should shuffle the given array', () => {
    let array: Array<number> = [1, 2, 3];
    let originalArray: Array<number> = array.slice();
    expect(JSON.stringify(shuffle(array))).not.toEqual(
      JSON.stringify(originalArray)
    );
  });

  it('#getColors should return Object of random color codes', () => {
    expect(getColors(5)).toHaveProperty('key0');
  });
});
