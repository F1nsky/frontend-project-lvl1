import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNum = getRandomNum();
  const question = getAnswer(`Question: ${randomNum} `);

  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
