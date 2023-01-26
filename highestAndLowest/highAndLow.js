// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

const highAndLow = (input) => {
  array = input.split(" ").map(num => parseInt(num)).sort((a, b) => a - b)

  return `${array[array.length-1]} ${array[0]}`
}

module.exports = highAndLow