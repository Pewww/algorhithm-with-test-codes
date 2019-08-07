import recursion1 from '../recursion1';

describe(`Verity that the function 'recursion1' returns the correct array.`, () => {
  it('It should return [3, 2, 1] if loop is 3', () => {
    expect(recursion1(3)).toEqual([3, 2, 1]);
  });

  it('It should return [] if loop is 0', () => {
    expect(recursion1(0)).toEqual([]);
  });

  it('It should throw TypeError', () => {
    expect(() => {
      recursion1('Hello');
    }).toThrow(TypeError);
  });
});
