// импортируем логику из файла 'index.js'
import gameEngine from '../index.js';

// экспортируем текст правил игры
export const rulesDescription = 'Find the greatest common divisor of given numbers.';

// объявляем константу производящую вычисление правильного ответа
const getCorrectAnswer = (randomNum1, randomNum2) => {
  // если второе случайное число равно false, возвращем первое случайное число
  if (!randomNum2) {
    return randomNum1;
  }
  // возващаем рекурсивную функцию с параметрами (randomNum2, randomNum1 % randomNum2)
  // на место параметра 'randomNum2' подставляется остаток от деления randomNum1 % randomNum2,
  // а на место параметра 'randomNum1' подставляется предыдущая итерация параметра 'randomNum2'
  // когда остаток от деления randomNum1 % randomNum2 будет равен нулю
  // при проверке параметра !randomNum2 вернётся значение true
  // рекурсия остановится и будет возврат значения из параметра 'randomNum1'
  // это и будет наибольшний общий делитель для исходных 'randomNum1' и 'randomNum2'
  return getCorrectAnswer(randomNum2, randomNum1 % randomNum2);
};

// экспортируем игру gameGrComDiv
// с логикой gameEngine для которой указаны параметры (rulesDescription, getCorrectAnswer)
export const gameGrComDiv = () => gameEngine(rulesDescription, getCorrectAnswer);
