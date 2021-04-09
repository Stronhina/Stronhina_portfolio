const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  //Check: is date undefined, null, 0, NaN, "", false ?
   if (!date) {
    return "Unable to determine the time of year!";
  }

  //Check: is date to string [object Date]?
  if ( Object.prototype.toString.call(date) !== "[object Date]" && !isNaN(date) ) {
    throw new Error();
  }

  //Check date class 
  if (!(date instanceof Date)) {
    throw new Error();
  }

  let month = date.getMonth();

  if ( month === 0 || month === 1 || month === 11) return "winter";
  if ( month === 2 || month === 3 || month === 4) return "spring";
  if ( month === 5 || month === 6 || month === 7) return "summer";
  if ( month === 8 || month === 9 || month === 10) return "autumn (fall)";

}
