module.exports = function getSeason(date) {
  // Date.prototype.getMonth() - Возвращает месяц (0-11) указанной даты по местному времени.
  //Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
  let month;
  if (date !== undefined) {month = date.getMonth();}
  else {return 'Unable to determine the time of year!';}
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {throw new Error;}
  if (month === 0 || month === 1 || month === 11) { return 'winter'; }
  if (month === 2 || month === 3 || month === 4) { return 'spring'; }
  if (month === 5 || month === 6 || month === 7) { return 'summer'; }
  if (month === 8 || month === 9 || month === 10) { return 'autumn'; }
  }
