import { Columns, Rows } from './interfaces'

export const generateLinesAndRows = (
  columns: Columns,
  rows?: Rows,
) => new Array(columns).fill(
  rows >= 0
    ? generateLinesAndRows(rows)
    : 0
);
