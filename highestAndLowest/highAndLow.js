// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// const input = "1 2 3 4 5"

const highAndLow = (input) => {
  array = input.split(" ")

  return `${array[0]} ${array[1]}`
}

module.exports = highAndLow