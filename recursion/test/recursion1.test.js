import func from '../recursion1';

describe(`Verity that the function 'func' returns the correct array.`, () => {
  it('It should return [3, 2, 1] if loop is 3', () => {
    expect(func(3)).toEqual([3, 2, 1]);
  });

  it('It should return [] if loop is 0', () => {
    expect(func(0)).toEqual([]);
  });

  it('It should return dd', () => {
    expect(() => {
      func('Hello');
    }).toThrow(TypeError);
  });
});
