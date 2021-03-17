const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  let arr = [];
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      arr.push(members[i].toLowerCase().trim()[0]);
    }
  }
  return arr.sort().join('').toUpperCase();
};

console.log(module.exports(['Ben', 'Tas', 'Dmitry', 'Vax', 'EAS']));
