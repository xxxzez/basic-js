const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  let ln2 = 0.693;

  if ( !sampleActivity ) return false;
  if ( typeof(sampleActivity ) !== 'string') return false;
  if ( isNaN(parseFloat(sampleActivity))) return false;
  if ( +(sampleActivity) <= 0 || +(sampleActivity) > MODERN_ACTIVITY) return false;

  let result = Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))) / (ln2/HALF_LIFE_PERIOD));
  return result;
};