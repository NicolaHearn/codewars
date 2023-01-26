const highAndLow = require('./highAndLow.js')

describe('highAndLow', () => {
  it('returns a number', () => {
    returnValue = highAndLow("1 2 3 4 5");

    expect(typeof returnValue).toEqual("string");
  });

  it('returns a string with 3, 4 or 5 characters', () => {
    returnValue1 = highAndLow("1 2 3 4 5");
    returnValue2 = highAndLow("-1 -2 -9 -6 -7")


    expect([3, 4, 5]).toContain(returnValue1.length)
    expect([3, 4, 5]).toContain(returnValue2.length)
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

  it('returns the highest number of the input array as the first character in the string', () => {
    const input1 = "3 4 5 1 2"
    const input2 = "-4, -8, -3, -2, -9"
    const input3 = "8, 10, 12, 9, 11"
    
    expect([highAndLow(input1).slice(0,1), highAndLow(input1).slice(0,2)]).toContain("5")
    expect([highAndLow(input2).slice(0,1), highAndLow(input2).slice(0,2)]).toContain("-2")
    expect([highAndLow(input3).slice(0,1), highAndLow(input3).slice(0,2)]).toContain("12")
  });

  it('returns the lowest number of the input array as the 3rd character in the string', () => {
    const input1 = "3 4 5 1 2"
    const input2 = "8 9 3 -1 1"
    const input3 = "8, 10, 12, 9, 11"
    
    expect([highAndLow(input1).slice(2), highAndLow(input1).slice(3)]).toContain("1")
    expect([highAndLow(input2).slice(2), highAndLow(input2).slice(3)]).toContain("-1")
    expect([highAndLow(input3).slice(2), highAndLow(input3).slice(3)]).toContain("8")
  });

});