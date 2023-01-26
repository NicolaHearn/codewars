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
    const input1 = "1 2 3 4 5"
    const input2 = "4 5 6 7 8"

    returnValue1 = highAndLow(input1);
    returnValue2 = highAndLow(input2);

    expect(input1.match(returnValue1.charAt(0))).not.toEqual(null);
    expect(input1.match(returnValue1.charAt(2))).not.toEqual(null);
    expect(input2.match(returnValue2.charAt(0))).not.toEqual(null);
    expect(input2.match(returnValue2.charAt(2))).not.toEqual(null);
  });

  it('returns the highest number of the input array as the first character in the array', () => {
    const input1 = "3 4 5 1 2"
    const input2 = "8 9 3 -1 1"
    
    expect(highAndLow(input1).charAt(0)).toEqual("5")
    expect(highAndLow(input2).charAt(0)).toEqual("9")
  });

});