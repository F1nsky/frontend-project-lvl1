import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const generateRound = () => {
  const randomNum = getRandomNum();

  const question = () => getAnswer(`Question: ${randomNum} `);

  const getCorrectAnswer = () => {
    if (randomNum <= 1) {
      return 'no';
    }
    for (let i = 2; i < Math.sqrt(randomNum); i += 1) {
      if (randomNum % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  return [question(), getCorrectAnswer()];
};

export default () => gameEngine(generateRound);
