// импортируем логику из файла 'index.js'
import gameEngine from '../index.js';

// экспортируем текст правил игры
export const rulesDescription = 'What is the result of the expression?';

// объявляем константу производящую вычисление правильного ответа
const getCorrectAnswer = (randomNum1, randomNum2, randomOperator) => {
  // вычисляем результат случайного выражения
  switch (randomOperator) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default:
      return 0;
  }
};

// экспортируем игру gameCalc
// с логикой gameEngine для которой указаны параметры (rulesDescription, getCorrectAnswer)
export const gameCalc = () => gameEngine(rulesDescription, getCorrectAnswer);
