export const columns = {
  verifyNeighboors: (row: Array<number>, index: number, skipCurrent?: boolean): number => {
    let count = 0;

    if (row) {
      const mineBefore = row[index -1] === -1;
      const mineCurrent = row[index] === -1;
      const mineAfter = row[index + 1] === -1;

      if (mineBefore) {
        count += 1;
      }

      if (mineCurrent && !skipCurrent) {
        count += 1;
      }

      if (mineAfter) {
        count += 1;
      }
    }

    return count;
  },
  numberifyColumns: (minefields: Array<number[]>): Array<number[]> => {
    let newMinefields = [...minefields]
      .map((row, rowIndex) => {
        const newRow = row.map((col, colIndex) => {
          if (col !== -1) {
            // row before
            col += columns.verifyNeighboors(minefields[rowIndex -1], colIndex);

            // Current row
            col += columns.verifyNeighboors(row, colIndex, true);

            // row after
            col += columns.verifyNeighboors(minefields[rowIndex +1], colIndex);
          }

          return col;
        });

      return newRow;
    });

    return newMinefields;
  },
};

export default columns;
