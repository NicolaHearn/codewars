// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// const input = "1 2 3 4 5"

const highAndLow = (input) => {
  array = input.split(" ").map(num => parseInt(num)).sort((a, b) => {a - b})

  return `${array[array.length-1]} ${array[1]}`
}

module.exports = highAndLow