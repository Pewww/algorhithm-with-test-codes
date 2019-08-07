import totalSum from '../totalSum';

describe(`Verity that the function 'totalSum' returns total from 0 to N.`, () => {
  it('It should return 6 if N is 3', () => {
    expect(totalSum(3)).toEqual(6);
  });

  it('It should return 0 if N is 0', () => {
    expect(totalSum(0)).toEqual(0);
  });
});
