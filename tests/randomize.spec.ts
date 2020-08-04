import randomize from '../src/randomize';

describe('Notillew minefield core randomize', () => {
  it('should be defined', () => {
    expect(randomize).toBeDefined();
    expect(randomize.integer).toBeDefined();
  });

  it('should return true on randomize range from 0 to 10', () => {
    const number = randomize.integer(0, 10);
    expect(number >= 0 && number <= 10).toBe(true);
  });
});
