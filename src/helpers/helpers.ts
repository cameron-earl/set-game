export const randInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArr = <T>(arr: T[]): T[] => {
  const newArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const randIdx = randInt(i, arr.length - 1);
    [newArr[i], newArr[randIdx]] = [newArr[randIdx], newArr[i]];
  }
  return newArr;
};
