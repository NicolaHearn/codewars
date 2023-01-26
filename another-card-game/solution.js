function solution(frank, sam, tom) 
{
(frank[1] > sam[1] && frank[1] > tom[1]) ? true : false;

}

//   roundsCanWin = 0
  



  for (i=0; i < frank.length; i++) {
    const samCheck = sam.filter(num => {
      num < i
    });
    const tomCheck = sam.filter(num => {
      num < i
    });
    if samCheck.length > 0 && tomCheck.length > 0

    const checkCards = (num) => {
      return frank[i] > num
    }
    if (sam.some(checkCards) && tom.some(checkCards)) {
      roundsCanWin += 1;
    }
  }

//   if (roundsCanWin >= 2) {
//     return true
//   } else {
//     return false
//   }

  // const checkCards = (num) => {
  //   return frank[0] > num
  // }

  // return sam.some(checkCards);

  // console.log(check)


  // frankTotal = frank.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue;
  // });
  // samTotal = sam.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue;
  // });
  // tomTotal = tom.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue;
  // });

//   if (frankTotal > samTotal && frankTotal > tomTotal) {

//   return true;
// } 
// else {
//   return false
// }
}

module.exports = solution;