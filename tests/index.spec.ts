import minefieldCore, { isMine } from '../src';

describe('Notillew minefield core', () => {
  it('should be defined', () => {
    expect(minefieldCore).toBeDefined();
    expect(minefieldCore.generate).toBeDefined();
    expect(isMine).toBeDefined();
  });
});
