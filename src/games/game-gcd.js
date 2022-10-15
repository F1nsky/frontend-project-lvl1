import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const generateRound = () => {
  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();

  const question = getAnswer(`Question: ${randomNum1} ${randomNum2} `);

  const findGCD = (num1, num2) => {
    let param1 = num1;
    let param2 = num2;
    while (param2) {
      const temp = param2;
      param2 = param1 % param2;
      param1 = temp;
    }
    return param1;
  };

  const correctAnswer = findGCD(randomNum1, randomNum2);

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'Find the greatest common divisor of given numbers.');
