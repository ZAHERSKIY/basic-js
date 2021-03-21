const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!isFinite(date.valueOf())) {
    throw Error;
  }

  let month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  } else if (month === 8 || month === 9 || month === 10) {
    return 'fall';
  }
};

const winterDate = new Date(2020, 01, 24);
const springDate = new Date(2020, 03, 21);
console.log(module.exports(springDate));
