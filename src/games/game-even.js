import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNum;

const question = () => {
  randomNum = getRandomNum();
  return getAnswer(`Question: ${randomNum} `);
};

const getCorrectAnswer = () => {
  let result = 'no';
  if (randomNum % 2 === 0) {
    result = 'yes';
  }
  return result;
};

export const gameEven = () => gameEngine(question, getCorrectAnswer);
