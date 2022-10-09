import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateRound = () => {
  const randomNum = getRandomNum();
  const question = getAnswer(`Question: ${randomNum} `);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound);
