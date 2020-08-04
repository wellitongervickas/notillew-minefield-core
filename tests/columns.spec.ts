import columns from './../src/columns';

describe('Notillew minefield core', () => {
  it('should be defined', () => {
    expect(columns).toBeDefined();
    expect(columns.numberifyColumns).toBeDefined();
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
