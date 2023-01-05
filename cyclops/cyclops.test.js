const isCyclops = require('./cyclops');

describe('isCyclops', () => {
  xit('converts a decimal to a binary number', () => {

    expect(isCyclops(7)).toEqual("111");
  });
  it('identifies whether 1-digit binary number is zero or not', () => {
    expect(isCyclops(0)).toEqual(true);
    expect(isCyclops(1)).toEqual(false);
  });
  it('identifies that a zero exists in a binary string', () => {
    // decimal 5 is binary 101
    // decimal 7 is binary 111

    expect(isCyclops(5)).toEqual(true);
    expect(isCyclops(7)).toEqual(false);
  });
  it('checks to see if there is more than 1 zero in the binary string', () => {
    // decimal 21 is 10101
    // decimal 5 is 101

    expect(isCyclops(10)).toEqual(false);
    expect(isCyclops(5)).toEqual(true);
  });
  it('checks whether a decimal is a cyclops', () => {
    // decimal 239 is 11101111
    // decimal 5 is 101
    expect(isCyclops(239)).toEqual(false);
    expect(isCyclops(5)).toEqual(true);
  });
});