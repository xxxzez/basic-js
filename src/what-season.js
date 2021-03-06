module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  let myMonth = date.getUTCMonth();
  if (myMonth >= 5 && myMonth <= 7) return 'summer';
  if (myMonth >= 8 && myMonth <= 10) return 'autumn';
  if ((myMonth >= 0 && myMonth <= 1) || myMonth == 11) return 'winter';
  if (myMonth >= 2 && myMonth <= 4) return 'spring';
}