import randomize from './randomize';

export const mines = {
  isMine: (minefields: Array<number[]>, rowIndex: number, columnIndex: number): boolean => {
    try {
      return minefields[rowIndex][columnIndex] === -1;
    } catch (error) {
      throw new Error('Invalid row or column');
    }
  },

  setMine: (row: Array<number>): Array<number>=> {
    const newRow = [...row];
    const index = randomize.integer(0, row.length);

    if (newRow[index] === -1) {
      return mines.setMine(newRow);
    }

    newRow[index] = -1;

    return newRow;
  },

  insertMines: (minefields: Array<number[]>, minesQuantity: number): Array<number[]> => {
    const newMinefields = [...minefields];

    for (let remainingMines = minesQuantity; remainingMines > 0; remainingMines--) {
      const index = randomize.integer(0, newMinefields.length);
      newMinefields[index] = mines.setMine(newMinefields[index])
    }

    return newMinefields;
  }
};

export default mines;
