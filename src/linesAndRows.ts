import { Minefields, Columns, Rows } from './interfaces';

export const generateLinesAndRows = (
  columns: Columns,
  rows?: Rows,
): Minefields => new Array(columns)
    .fill(rows >= 0
      ? generateLinesAndRows(rows)
      : 0
);

export const updateLinesAndRowsValues = (minefields: Minefields): Minefields => [];
