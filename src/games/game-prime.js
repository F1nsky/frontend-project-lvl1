import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const generateRound = () => {
  const randomNum = getRandomNum();
  const question = getAnswer(`Question: ${randomNum} `);

  const isPrime = (num) => {
    let result = 'yes';
    if (num <= 1) {
      result = 'no';
      return result;
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        result = 'no';
      }
    }
    return result;
  };
  const correctAnswer = isPrime(randomNum);
  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
