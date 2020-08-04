import randomize from './randomize';

interface InsertMines {
  minefields: Array<number[]>
  minesMap: Object;
}

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

  insertMines: (currentMinefields: Array<number[]>, minesQuantity: number): InsertMines => {
    const newMinefields = [...currentMinefields];
    let minesMap = {};

    for (let remainingMines = minesQuantity; remainingMines > 0; remainingMines--) {
      const index = randomize.integer(0, newMinefields.length);

      newMinefields[index] = mines.setMine(newMinefields[index]);

      minesMap[index] = Object(newMinefields[index])
        .reduce((indexes: number[], column: number, columnIndex: number) => {
          if (column === -1) {
            indexes.push(columnIndex);
          }

          return indexes;
        }, []);
    }

    return {
      minefields: newMinefields,
      minesMap,
    };
  },
};

export default mines;
