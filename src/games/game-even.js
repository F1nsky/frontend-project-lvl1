// импортируем логику из файла 'index.js'
import gameEngine from '../index.js';

// экспортируем текст правил игры
export const rulesDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// объявляем константу производящую вычисление правильного ответа
const getCorrectAnswer = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');

// экспортируем игру gameEven
// с логикой gameEngine для которой указаны параметры (rulesDescription, getCorrectAnswer)
export const gameEven = () => gameEngine(rulesDescription, getCorrectAnswer);
