const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
  //Check wrong type or no arguments
  if ( !sampleActivity || typeof(sampleActivity) !== 'string') {
    return false;
  }

  //Check validate parameter
  if ( isNaN(sampleActivity) || sampleActivity.trim().length === 0) {
    return false;
  }

  //Check inadequate values
  if ( parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15) {
    return false;
  }

  let t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693;

  return  Math.ceil(t);
};
