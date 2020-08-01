export const generator = {
  linesAndRows: (columns: number, rows?: number): Array<number[]> => new Array(columns)
    .fill(rows >= 0
      ? generator.linesAndRows(rows)
      : 0),

  numberifyRows: (minefields: Array<number[]>): Array<number[]> => {
    let newMinefields = [...minefields];
    return newMinefields;
  },
}

export default generator;
