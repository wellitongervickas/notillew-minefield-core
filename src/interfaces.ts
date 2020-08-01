export type Minefields = Array<number[]>;
export type Rows = number;
export type Columns = number;
export type Mines = number;

export interface Options {
  columns: Columns;
  rows: Rows;
  mines: Mines;
}
