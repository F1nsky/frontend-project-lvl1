import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const generateRound = () => {
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

  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();
  const randomOperator = getRandomOperator();

  const question = getAnswer(`Question: ${randomNum1} ${randomOperator} ${randomNum2} `);

  const expressions = {
    '+': randomNum1 + randomNum2,
    '-': randomNum1 - randomNum2,
    '*': randomNum1 * randomNum2,
  };
  const correctAnswer = expressions[randomOperator];

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound);
