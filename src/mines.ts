import { Minefields, Mines } from './interfaces';
import { getRandomInteger } from './randomize';

const setRandomMine = (row) => {
  const newRow = [...row];
  const index = getRandomInteger(0, row.length);

  if (newRow[index] === -1) {
    return setRandomMine(newRow);
  }

  if (index < row.length) {
    newRow[index] = -1
  }

  return newRow;
}

export const insertRandomMines = (minefields: Minefields, mines: Mines): Minefields => {
  let newMinefields = [...minefields];

  for (let remainingMines = mines; remainingMines > 0; remainingMines--) {
    const index = getRandomInteger(0, newMinefields.length -1);
    newMinefields[index] = setRandomMine(newMinefields[index])
  }

  return newMinefields;
}
