import { Minefields, Mines, Columns } from './interfaces';
import { getRandomInteger } from './randomize';

const setRandomMine = (
  row: Columns[],
): Columns[] => {
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

export const insertRandomMines = (
  minefields: Minefields,
  mines: Mines,
): Minefields => {
  const newMinefields = [...minefields];

  for (let remainingMines = mines; remainingMines > 0; remainingMines--) {
    const index = getRandomInteger(0, newMinefields.length);
    newMinefields[index] = setRandomMine(newMinefields[index])
  }

  return newMinefields;
}
