type Minefields = number[][];
type Rows = number;
type Columns = number;
type Mines = number;

interface Options {
  columns: Columns;
  rows: Rows;
  mines?: Mines;
}

const randomMinesPopulate = (minefield: Minefields, mines: number): Minefields => {
  let remainingMines = mines;

  return minefield.map(row => {
    return row.map(column => {
      if (Math.round(Math.random()) && remainingMines > 0) {
        column = -1;
        remainingMines -= 1;
      }

      return column;
    })
  });
}

const generateLinesAndRows = (columns: Columns = 0, rows?: Rows) => new Array(columns)
  .fill(rows >= 0 ? generateLinesAndRows(rows) : 0);

const generate = (options: Options): Minefields => {
  const {
    columns = 8,
    rows = 8,
    mines = 6,
  } = options;

  let minefield = generateLinesAndRows(columns, rows);

  const positionsCount = columns + rows;
  if (mines >= positionsCount) {
    throw new Error(`Mines quantity is equal or greater than ${positionsCount}, please type other value`);
  }

  minefield = randomMinesPopulate(minefield, mines);

  console.log(minefield);

  return minefield;
};

generate({
  columns: 4,
  rows: 4,
});


export {
  generate,
}
