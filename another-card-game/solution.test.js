const solution = require('./solution');

describe('solution', () => {
  it("returns true if the first element in Frank's array is greater than any of the elements in Sam's array", () => {
    // expect(solution([2], [1], [1])).toEqual(true);
    expect(solution([1, 2], [1, 1], [3, 3])).toEqual(false);
    expect(solution([3, 4, 5 ,6], [0, 1, 8, 10], [2, 7, 9, 11])).toEqual(false);
  });
  xit("compares a single input array and returns true if Frank's number is higher than Tom's and Sam's", () => {
    expect(solution([2], [1], [1])).toEqual(true);
    expect(solution([1], [2], [2])).toEqual(false);
  });
  xit("compares arrays with two digits and returns true if the total of Frank's cards is higher than the total of Tom's and Sam's", () => {
    expect(solution([1, 3], [1, 1], [1, 1])).toEqual(true);
    expect(solution([1, 1], [2, 1], [2, 1])).toEqual(false);
  });
  xit("compares arrays with four digits and returns true is the total of Frank's cards is higher than the totoal of Tom's ans Sam's", () => {
    expect(solution([1, 3, 6, 7], [1, 1, 1, 1], [1, 1, 1, 1])).toEqual(true);
    expect(solution([1, 1, 1, 1], [2, 2, 2, 2], [2, 2, 2, 2])).toEqual(false);

  });
  
});