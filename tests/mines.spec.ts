import mines from '../src/mines';

describe('Notillew minefield core', () => {
  it('should be defined', () => {
    expect(mines).toBeDefined();
    expect(mines.insertMines).toBeDefined();
    expect(mines.setMine).toBeDefined();
  });

  it('should insert mines in minefield an count to be equal', () => {
    const minesQuantity = 4;

    const {
      minefields,
    } = mines.insertMines([
      [0,0,0,0],
      [0,0,0,0],
    ], minesQuantity);

    const countMines = Object(minefields).reduce((count, row) => {
      count += row.filter((col: number) => col === -1).length;

      return count;
    }, 0);

    expect(countMines).toBe(minesQuantity);
  });

  it('should validate minefield mapper', () => {
    const {
      minesMap,
      minefields,
    } = mines.insertMines([
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ], 4);

    const rowIndex = Object.keys(minesMap)[0];
    const columnIndex = minesMap[rowIndex][0];

    expect(
      minefields[rowIndex].filter((col: number) => col === -1).length,
    ).toBe(minesMap[rowIndex].length);

    expect(minefields[rowIndex][columnIndex]).toBe(-1);
  });

  it('should set mine in only one column', () => {
    const minefields = mines.setMine([0,0,0,0]);
    expect(minefields.filter((col: number) => col === -1).length).toBe(1);
  });
});
