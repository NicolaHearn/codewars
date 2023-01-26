const highAndLow = require('./highAndLow.js')

describe('highAndLow', () => {
  it('returns a number', () => {
    returnValue = highAndLow("1 2 3 4 5");

    expect(typeof returnValue).toEqual("string");
  });

  it('returns a string with 3 characters', () => {
    returnValue = highAndLow("1 2 3 4 5");

    expect(returnValue.length).toEqual(3)
  })
});