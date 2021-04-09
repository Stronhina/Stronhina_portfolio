const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  str = String(str);
  addition = String(addition); 
 
  let newAdd = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let newStr = ( str + newAdd + separator).repeat( repeatTimes - 1) + ( str + newAdd);

  return newStr;
};
  