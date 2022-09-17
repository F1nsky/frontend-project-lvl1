// импортируем логику из файла 'index.js'
import gameEngine from '../index.js';

// экспортируем текст правил игры
export const rulesDescription = 'What number is missing in the progression?';

// объявляем константу производящую вычисление правильного ответа
// параметры 'array' и 'replaceIndex' берутся из файла с логикой игры 'index.js'
const getCorrectAnswer = (array, replaceIndex) => array[replaceIndex];

// экспортируем игру gameProgression
// с логикой gameEngine для которой указаны параметры (rulesDescription, getCorrectAnswer)
export const gameProgression = () => gameEngine(rulesDescription, getCorrectAnswer);
