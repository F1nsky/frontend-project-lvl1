/* eslint-disable prefer-destructuring */
// импортируем функцию получения случайного числа из файла 'getRandomNum.js'
import getRandomNum from './getRandomNum.js';

// экспортируем функцию возвращающую случайный математический оператор
export default () => {
  // создаем массив с операторами
  const operators = ['+', '-', '*'];
  // объявляем переменную для сохранения результата
  let result;
  // объявляем константу возвращающую случайное число
  const num = getRandomNum(0, 3);

  // в зависимости от значения случайного числа
  // возвращаем элемент массива, который является мат.оператором
  if (num <= 1) {
    result = operators[0];
  } else if (num > 1 && num <= 2) {
    result = operators[1];
  } else if (num > 2 && num <= 3) {
    result = operators[2];
  }
  return result;
};
