export const generator = {
  columnsAndRows: (columns: number, rows?: number): Array<number[]> => new Array(columns)
    .fill(rows >= 0
      ? generator.columnsAndRows(rows)
      : 0),
}

export default generator;
