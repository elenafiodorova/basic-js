module.exports = function countCats(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let n = 0; n < arr[i].length; n++) {
      if (arr[i][n] === '^^') {
      count = count +1;
      }
    }
  }
  return count;
};
