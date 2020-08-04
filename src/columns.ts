
// indexAnterior
// index
// indexPosterior

export const columns = {


  numberifyColumns: (minefields: Array<number[]>): Array<number[]> => {
    let newMinefields = [...minefields]
      .map((row, rowIndex) => {
        const newRow = row.map((col, colIndex) => {
          if (col !== -1) {
            const rowBefore = minefields[rowIndex -1];
            const rowAfter = minefields[rowIndex + 1];

            const colIndexBefore = row[colIndex -1] === -1;
            const colIndexAfter = row[colIndex + 1] === -1;

            if (colIndexBefore) {
              col += 1;
            }

            if (colIndexAfter) {
              col += 1;
            }

            if (rowBefore && rowBefore[colIndex - 1] === -1) {
              col += 1;
            }

            if (rowBefore && rowBefore[colIndex] === -1) {
              col += 1;
            }

            if (rowBefore && rowBefore[colIndex + 1] === -1) {
              col += 1;
            }

            if (rowAfter && rowAfter[colIndex - 1] === -1) {
              col += 1;
            }

            if (rowAfter && rowAfter[colIndex] === -1) {
              col += 1;
            }

            if (rowAfter && rowAfter[colIndex + 1] === -1) {
              col += 1;
            }
          }

          return col;
        });

      return newRow;
    });

    return newMinefields;
  },
};

export default columns;
