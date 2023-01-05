const isCyclops = (decimal) => {
  const binary = decimal.toString(2);
  console.log(binary);
  const numZeros = (binary.match(/0/g) || []).length
  console.log(numZeros);
  const numDigits = binary.length
  console.log(numDigits);
  
  
  if(numZeros === 1 && numDigits % 2 == 1) {
    const onesArray = binary.split("0")
    if (onesArray[0] === onesArray[1]) {
      return true
    }
    else {
      return false
    }
    }
    else {
      return false
    }
}

module.exports = isCyclops;