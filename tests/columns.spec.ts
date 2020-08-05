import columns from './../src/columns';

describe('Notillew minefield core', () => {
  it('should be defined', () => {
    expect(columns).toBeDefined();
    expect(columns.numberifyColumns).toBeDefined();
    expect(columns.verifyNeighboors).toBeDefined();
  });

  it('should return a neighboors mines count', () => {
    const rowBefore = columns.verifyNeighboors([0, -1, -1, -1, 0], 2);
    const rowCurrent= columns.verifyNeighboors([0, -1, -1, -1, 0], 2, true);
    const rowAfter = columns.verifyNeighboors([0, -1, -1, -1, 0], 3);

    expect(rowBefore).toBe(3);
    expect(rowCurrent).toBe(2);
    expect(rowAfter).toBe(2);
  });

  it('should update zero position to count mines  from neighboors', () => {
    const initialMinesfield = columns.numberifyColumns([
      [0, 0, -1, 0, 0, 0],
      [0, 0,  0, 0, 0, 0],
      [0, 0, -1, 0, 0, 0],
      [0, 0,  0, 0, 0, 0],
    ]);

    const expectedMinesfield = [
      [0, 1, -1, 1, 0, 0],
      [0, 2,  2, 2, 0, 0],
      [0, 1, -1, 1, 0, 0],
      [0, 1,  1, 1, 0, 0],
    ];

    expect(initialMinesfield.length).toBe(expectedMinesfield.length);
    expect(initialMinesfield).toEqual(expectedMinesfield);
  });
});
