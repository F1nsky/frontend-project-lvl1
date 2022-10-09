import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const generateRound = () => {
  const randomNum = getRandomNum();
  const question = getAnswer(`Question: ${randomNum} `);
  let correctAnswer = 'yes';
  if (randomNum <= 1) {
    correctAnswer = 'no';
    return correctAnswer;
  }
  for (let i = 2; i <= Math.sqrt(randomNum); i += 1) {
    if (randomNum % i === 0) {
      correctAnswer = 'no';
    }
  }
  return [question, correctAnswer];
};

export default () => gameEngine(generateRound);
