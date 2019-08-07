import factorial from '../factorial';

describe(`Verity that the function 'factorial' returns n!`, () => {
  it('It should return 120 if N is 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('It should return 1 if N is 0', () => {
    expect(factorial(0)).toBe(1);
  });
});
