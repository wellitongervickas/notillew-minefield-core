import randomize from './randomize';

interface InsertMines {
  minefields: Array<number[]>
  minesMap: Object;
}

export const mines = {
  setMine: (currentRow: Array<number>): Array<number>=> {
    const row = [...currentRow];
    const index = randomize.integer(0, currentRow.length);

    if (row[index] === -1) {
      return mines.setMine(row);
    }

    row[index] = -1;

    return row;
  },

  insertMines: (currentMinefields: Array<number[]>, minesQuantity: number): InsertMines => {
    const minefields = [...currentMinefields];
    let minesMap = {};

    for (let remainingMines = minesQuantity; remainingMines > 0; remainingMines--) {
      const index = randomize.integer(0, minefields.length);

      minefields[index] = mines.setMine(minefields[index]);

      minesMap[index] = Object(minefields[index])
        .reduce((indexes: number[], column: number, columnIndex: number) => {
          if (column === -1) {
            indexes.push(columnIndex);
          }

          return indexes;
        }, []);
    }

    return {
      minefields,
      minesMap,
    };
  },
};

export default mines;
