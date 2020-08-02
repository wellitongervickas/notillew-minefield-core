import minefieldCore, { isMine } from '../src';

describe('Notillew minefield core', () => {
  it('should be defined', () => {
    expect(minefieldCore).toBeDefined();
    expect(minefieldCore.generate).toBeDefined();
    expect(isMine).toBeDefined();
  });

  it('should generate minefield core', () => {
    const rows = 12;
    const columns = 12;
    const minefield = minefieldCore.generate(columns, rows, 12);

    expect(minefield.length).toBe(rows);
    expect(minefield.every(row => row.length = columns)).toBe(true);
  });

  it('should return exactly mines quantity', () => {
    const mines = 12;
    const minefield = minefieldCore.generate(12, 12, mines);

    const minesQuantity = minefield.reduce((count, current) => {
      count += current.filter(col => col === -1).length;
      return count;
    }, 0)

    expect(minesQuantity).toBe(mines);
  });

  it('should return true on mine', () => {
    const simulatedMinefield = [[0,-1,0,0]];
    const boom = isMine(simulatedMinefield, 0, 1);
    expect(boom).toBeTruthy()
  });
  it('should return false when isnt mine', () => {
    const simulatedMinefield = [[0,-1,0,0]];
    const who = isMine(simulatedMinefield, 0, 0);
    expect(who).toBeFalsy();
  });
});
