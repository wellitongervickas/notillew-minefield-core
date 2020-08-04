import generator from '../src/generator';

describe('', () => {
  it('should be defined', () => {
    expect(generator).toBeDefined();
    expect(generator.linesAndRows).toBeDefined();
  });

  it('should generate a list with rows and colums', () => {
    const rows = 12;
    const columns = 24;
    const generatedPositionsCount = rows * columns;

    const linesAndRows = generator.linesAndRows(rows, columns);
    const positionsQuantity = Object(linesAndRows)
      .reduce((count: number, row: Array<number[]>) => count += row.length, 0);

    expect(positionsQuantity).toBe(generatedPositionsCount);
    expect(linesAndRows.every(row => row.length === 24)).toBe(true);
    expect(linesAndRows.length).toBe(rows);
  });
});
