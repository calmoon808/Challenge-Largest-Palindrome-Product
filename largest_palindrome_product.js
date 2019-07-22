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
  let num = Math.pow(10, digits);
  for (let i = 0; i < num; i++){
    for (let j = 0; j < num; j++){
      let product = i * j;
      let compareNum = Array.from(product.toString()).map(Number);
      let limit = Math.floor(compareNum.length / 2);
      let count = 0
      let isSame = false;
      while (count !== limit){
        if (compareNum[count] === compareNum[compareNum.length - (count + 1)]){
          isSame = true;
          count++;
        } else {
          isSame = false;
          count = limit;
        }
      }
      if (isSame){
        compareNum = compareNum.join('') * 1;
        factor_0 = i;
        factor_1 = j;
        if (compareNum > palindromeNumber){
          palindromeNumber = compareNum;
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
