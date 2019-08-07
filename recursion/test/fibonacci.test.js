import fibonacci from '../fibonacci';

describe(`Verity that the function 'fibonacci' returns correct result`, () => {
  it('It should return 0 if N is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('It should return 1 if N is 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('It should return 2 if N is 4', () => {
    expect(fibonacci(3)).toBe(2);
  });

  it('It should return 8 if N is 7', () => {
    expect(fibonacci(6)).toBe(8);
  });
});
