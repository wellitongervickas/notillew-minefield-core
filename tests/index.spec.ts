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
    const {
      minefields,
    } = minefieldCore.generate(columns, rows, 12);

    expect(minefields.length).toBe(rows);
    expect(minefields.every(row => row.length = columns)).toBe(true);
  });

  it('should return exactly mines quantity', () => {
    const mines = 12;
    const {
      minefields,
    } = minefieldCore.generate(12, 12, mines);

    const minesQuantity = minefields.reduce((count, current) => {
      count += current.filter(col => col === -1).length;
      return count;
    }, 0)

    expect(minesQuantity).toBe(mines);
  });

  it('should validate if return minefield mapper', () => {
    const {
      minesMap,
    } = minefieldCore.generate(12, 12, 12);

    expect(Object.keys(minesMap).length > 0).toBe(true);
  });

  it('should return an error message in columns or rows quantity', () => {
    expect(() => minefieldCore.generate(5, 5, 12)).toThrow('Invalid rows or columns quantity');
  });

  it('should return an error message in mine quantity', () => {
    expect(() => minefieldCore.generate(12, 12, 200)).toThrow('Invalid mines quantity');
  });

  it('should return an error message in mine verifcation', () => {
    expect(() => isMine([], 0, 2)).toThrow('Invalid row or column');
  });
});
