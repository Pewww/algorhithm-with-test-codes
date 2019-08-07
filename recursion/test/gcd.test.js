import {gcd, simpleGcd} from '../gcd';

describe(`Verity that the function 'gcd' and 'simpleGcd' returns the greatest common measure.`, () => {
  it('It should return 3 if m = 6, n = 3', () => {
    expect(gcd(6, 3)).toBe(3);
    expect(simpleGcd(6, 3)).toBe(3);
  });

  it('It should return 11 if m = 143, n = 11', () => {
    expect(gcd(143, 11)).toBe(11);
    expect(simpleGcd(143, 11)).toBe(11);
  });

  it('It should return 5 if m = 45, n = 55', () => {
    expect(gcd(45, 55)).toBe(5);
    expect(simpleGcd(45, 55)).toBe(5);
  });

  it('It should return 1 if m = 12, n = 17', () => {
    expect(gcd(12, 17)).toBe(1);
    expect(simpleGcd(12, 17)).toBe(1);
  });

  it('It should return 10 if m = 10, n = 50', () => {
    expect(gcd(10, 50)).toBe(10);
    expect(simpleGcd(10, 50)).toBe(10);
  });
});
