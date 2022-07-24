import { ColorCodes } from '~/@types/GenericTypes';

export const shellCount = (): number => Number(process.env.SHELL_COUNT);

export const shuffle = <T>(elements: T[]): Array<T> => {
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return [...elements];
};

export const getColors = (count: number): ColorCodes => {
  let colorCodes = {};
  for (let i = 0; i < count; i++) {
    colorCodes[`key${i}`] = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
  }
  return colorCodes;
};

export enum Level {
  Beginner = 2,
  Intermediate = 4,
  Expert = 8,
}
