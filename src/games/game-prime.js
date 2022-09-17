// импортируем логику из файла 'index.js'
import gameEngine from '../index.js';

// экспортируем текст правил игры
export const rulesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// объявляем переменную в которую сохраняется правильный ответ
// по умолчанию в ней указан ответ 'yes'
let conclusion = 'yes';

// объявляем константу производящую вычисление правильного ответа
const getCorrectAnswer = (randomNum) => {
  // если случайное число меньше или равно 1,
  // значит оно не простое и в conclusion сохраняется 'no'
  if (randomNum <= 1) {
    conclusion = 'no';
  }

  // объявляем цикл, который проверяет случайное число на соотвествие условию
  // и возвращает переменную conclusion со значением 'no' или 'yes' в зависимости от результата
  for (let i = 2; i < randomNum; i += 1) {
    // если остаток деления randomNum на i равен нулю
    // то в переменную conclusion сохраняется 'no'
    if (randomNum % i === 0) {
      conclusion = 'no';
    }
    // в других случаях сохранения значений в переменную conclusion не происходит
  }
  // производится возврат переменной conclusion
  return conclusion;
};

// экспортируем игру gamePrime
// с логикой gameEngine для которой указаны параметры (rulesDescription, getCorrectAnswer)
export const gamePrime = () => gameEngine(rulesDescription, getCorrectAnswer);
