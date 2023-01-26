const highAndLow = require('./highAndLow.js')

describe('highAndLow', () => {
  it('returns a number', () => {

    returnValue = highAndLow("1 2 3 4 5")
    expect(typeof returnValue).toEqual("string");
 
  })
})