import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const generateRound = () => {
  const randomNum = getRandomNum();

  const question = () => getAnswer(`Question: ${randomNum} `);

  const getCorrectAnswer = () => {
    let result = 'yes';
    for (let i = 2; i < Math.sqrt(randomNum); i += 1) {
      if (randomNum % i === 0 || randomNum <= 1) {
        result = 'no';
      }
    }
    return result;
  };
  return [question(), getCorrectAnswer()];
};

export default () => gameEngine(generateRound);
