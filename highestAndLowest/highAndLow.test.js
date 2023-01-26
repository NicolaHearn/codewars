const highAndLow = require('./highAndLow.js')

describe('highAndLow', () => {
  it('returns a number', () => {
    returnValue = highAndLow("1 2 3 4 5");

    expect(typeof returnValue).toEqual("string");
  });

  it('returns a string with 3 characters', () => {
    returnValue = highAndLow("1 2 3 4 5");

    expect(returnValue.length).toEqual(3)
  });

  it('only returns characters from the input string', () => {
    returnValue = highAndLow("1 2 3 4 5");

    expect("1 2 3 4 5".match(returnValue.charAt(0))).not.toEqual(null);
    expect("1 2 3 4 5".match(returnValue.charAt(2))).not.toEqual(null);
  });

});