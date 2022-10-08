import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Find the greatest common divisor of given numbers.');

const generateRound = () => {
  let randomNum1 = getRandomNum();
  let randomNum2 = getRandomNum();

  const question = () => getAnswer(`Question: ${randomNum1} ${randomNum2} `);

  const getCorrectAnswer = () => {
    while (randomNum2) {
      const temp = randomNum2;
      randomNum2 = randomNum1 % randomNum2;
      randomNum1 = temp;
    }
    return randomNum1;
  };
  return [question(), getCorrectAnswer()];
};

export default () => gameEngine(generateRound);
