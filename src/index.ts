import generator from "./generator";
import mines from "./mines";

export const isMine = mines.isMine;

const minefieldCore = {
  generate: (columns: number, rows: number, minesQuantity: number): Array<number[]> => {
    if (columns < 12 || rows < 12) {
      throw new Error(`Invalid rows or columns quantity`);
    }

    if (minesQuantity < 6 || minesQuantity >= (columns * rows)) {
      throw new Error('Invalid mines quantity');
    }

    let minefields = generator.linesAndRows(columns, rows);
    minefields = mines.insertMines(minefields, minesQuantity);

    return minefields;
  },
};

// ToDo: remove this
// (() => setInterval(() => {
//   console.log(minefieldCore.generate(12, 12, 12));
//   console.log('Generated', new Date().toLocaleString())
// }, 1000))()

export default minefieldCore;
