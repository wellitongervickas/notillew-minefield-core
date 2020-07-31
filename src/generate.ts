import {
  Options,
  Minefields,
} from './interfaces';

import { generateLinesAndRows } from './linesAndRows';
import { insertRandomMines } from './mines';

const generate = (options: Options): Minefields => {
  const {
    columns = 12,
    rows = 12,
    mines = 6,
  } = options;

  if (columns < 12 || rows < 12) {
    throw new Error(`Invalid rows or columns quantity`);
  }

  if (mines < 6 || mines >= (columns * rows)) {
    throw new Error('Invalid mines quantity');
  }

  let minefields = generateLinesAndRows(columns, rows);

  minefields = insertRandomMines(minefields, mines);

  return minefields;
};

export {
  generate,
}
