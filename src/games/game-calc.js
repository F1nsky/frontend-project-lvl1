import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const getRandomOperator = () => {
  const operators = {
    0: '+',
    1: '-',
    2: '*',
  };
  const num = getRandomNum(0, 2);

  return operators[num];
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
  const expressions = {
    '+': randomNum1 + randomNum2,
    '-': randomNum1 - randomNum2,
    '*': randomNum1 * randomNum2,
  };
  return expressions[randomOperator];
};

export default () => gameEngine(question, getCorrectAnswer);
