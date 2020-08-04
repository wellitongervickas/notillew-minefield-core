export const generator = {
  linesAndRows: (columns: number, rows?: number): Array<number[]> => new Array(columns)
    .fill(rows >= 0
      ? generator.linesAndRows(rows)
      : 0),
}

export default generator;
