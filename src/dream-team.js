module.exports = function createDreamTeam(arr) {
  let arrNew = new Array(); //массив для сохранения новых значений
  let j = 0, members; //номера элементов нового массива
  if (Array.isArray(arr)) {
    for (let i=0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        let name = arr[i].trim();
        arrNew[j] = name[0].toUpperCase();
        j = j + 1;
      }
    }
    return arrNew.sort().join('');
  } else return false;
};