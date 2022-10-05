import gameEngine from '../index-test.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Find the greatest common divisor of given numbers.');

let randomNum1;
let randomNum2;

const question = () => {
  randomNum1 = getRandomNum();
  randomNum2 = getRandomNum();
  const result = getAnswer(`Question: ${randomNum1} ${randomNum2} `);
  return result;
};

const getCorrectAnswer = () => {
  while (randomNum2) {
    const temp = randomNum2;
    randomNum2 = randomNum1 % randomNum2;
    randomNum1 = temp;
  }
  return randomNum1;
};

export const gameGrComDiv = () => gameEngine(question, getCorrectAnswer);
