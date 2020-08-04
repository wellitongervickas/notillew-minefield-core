import mines from '../src/mines';

describe('Notillew minefield core', () => {
  it('should be defined', () => {
    expect(mines).toBeDefined();
    expect(mines.insertMines).toBeDefined();
    expect(mines.setMine).toBeDefined();
  });

  it('should return true on mine', () => {
    const simulatedMinefield = [[0,-1,0,0]];
    const boom = mines.isMine(simulatedMinefield, 0, 1);
    expect(boom).toBeTruthy();
  });

  it('should return false when isnt mine', () => {
    const simulatedMinefield = [[0,-1,0,0]];
    const pass = mines.isMine(simulatedMinefield, 0, 0);
    expect(pass).toBeFalsy();
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
      map,
      minefields,
    } = mines.insertMines([
      [0,0,0,0],
      [0,0,0,0],
    ], 4);

    const firstRowIndex = Object.keys(map)[0];
    const firstColumnMine = map[firstRowIndex][0];

    const secondRowIndex = Object.keys(map)[1];
    const secondColumnMine = map[secondRowIndex][0];

    expect(
      minefields[firstRowIndex].filter((col: number) => col === -1).length,
    ).toBe(map[firstRowIndex].length);

    expect(minefields[firstRowIndex][firstColumnMine]).toBe(-1);
    expect(minefields[secondRowIndex][secondColumnMine]).toBe(-1);

  });

  it('should set mine in only one column', () => {
    const minefields = mines.setMine([0,0,0,0]);
    expect(minefields.filter((col: number) => col === -1).length).toBe(1);
  });
});
