/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  if (digits === 2){
    for (let i = 10; i < 100; i++){
      for (let j = 10; j < 100; j++){
        let product = i * j;
        let compareNum = Array.from(product.toString()).map(Number);
        if (compareNum[0] === compareNum[3] && compareNum[1] === compareNum[2]){
          compareNum = compareNum.join('') * 1;
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = compareNum; 
        }
      }
    }
  }

  if (digits === 3){
    for (let i = 100; i < 999; i++){
      for (let j = 100; j < 999; j++){
        let product = i * j;
        let compareNum = Array.from(product.toString()).map(Number);
        if (compareNum[0] === compareNum[5] && 
          compareNum[1] === compareNum[4] && 
          compareNum[2] === compareNum[3]){
          compareNum = compareNum.join('') * 1;
          factor_0 = i;
          factor_1 = j;
          if (compareNum > palindromeNumber){
            palindromeNumber = compareNum;
          } 
        }
      }
    }
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

console.log(Math.floor(4 / 2));