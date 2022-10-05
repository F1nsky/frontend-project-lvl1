import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const [a, b, c] = operators;
  let result;
  const num = getRandomNum(0, 30);
  if (num <= 1) {
    result = a;
  } else if (num > 1 && num <= 20) {
    result = b;
  } else if (num > 2 && num <= 30) {
    result = c;
  }
  return result;
};

console.log('What is the result of the expression?');

let randomNum1;
let randomNum2;
let randomOperator;

const question = () => {
  randomNum1 = getRandomNum();
  randomNum2 = getRandomNum();
  randomOperator = getRandomOperator();
  const result = getAnswer(`Question: ${randomNum1} ${randomOperator} ${randomNum2} `);
  return result;
};

const getCorrectAnswer = () => {
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

export const gameCalc = () => gameEngine(question, getCorrectAnswer);
