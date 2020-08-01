import { Columns, Rows, Minefields } from './interfaces';

export const verifyPosition = (
  minefields: Minefields,
  row: Rows,
  column: Columns,
): boolean => minefields[row][column] === -1;
