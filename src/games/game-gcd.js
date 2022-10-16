import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const generateRound = () => {
  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();

  const question = getAnswer(`Question: ${randomNum1} ${randomNum2} `);

  const findGCD = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return findGCD(num2, num1 % num2);
  };
  const correctAnswer = findGCD(randomNum1, randomNum2);
  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'Find the greatest common divisor of given numbers.');
