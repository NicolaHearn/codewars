const isCyclops = (decimal) => {
  const binaryArray = decimal.toString(2).split("0");
  console.log(binaryArray);

  
  if (binaryArray.length === 2 && binaryArray[0] === binaryArray[1]) {
    return true
  } else {
    return false
  }
}

module.exports = isCyclops;